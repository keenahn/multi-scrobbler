import dayjs from "dayjs";
import { combinePartsToString, mergeArr } from "../utils";
import AbstractSource from "./AbstractSource";
import formidable from 'formidable';
import concatStream from 'concat-stream';
import { PlexSourceConfig } from "../common/infrastructure/config/source/plex";
import { FormatPlayObjectOptions, InternalConfig, SourceType } from "../common/infrastructure/Atomic";
import EventEmitter from "events";
import winston from '@foxxmd/winston';
import { PlayObject } from "../../core/Atomic";
import { truncateStringToLength } from "../../core/StringUtils";

const shortDeviceId = truncateStringToLength(10, '');

export default class PlexSource extends AbstractSource {
    users: string[];
    libraries: string[];
    servers: string[];

    multiPlatform: boolean = true;

    declare config: PlexSourceConfig;

    constructor(name: any, config: PlexSourceConfig, internal: InternalConfig, type: SourceType = 'plex',emitter: EventEmitter) {
        super(type, name, config, internal, emitter);
        const {
            data: {
                user = [],
                libraries = [],
                servers = [],
                options: {
                    logFilterFailure = 'warn'
                } = {}
            } = {},
        } = config

        if(logFilterFailure !== false && !['debug', 'warn'].includes(logFilterFailure)) {
            this.logger.warn(`logFilterFailure value of '${logFilterFailure.toString()}' is NOT VALID. Logging will not occur if filters fail. You should fix this.`);
        }

        if (!Array.isArray(user)) {
            if(user.trim() === '') {
                this.users = [];
            } else {
                this.users = user.split(',').map(x => x.trim());
            }
        } else {
            this.users = user;
        }
        this.users = this.users.map((x: any) => x.toLocaleLowerCase())

        if (!Array.isArray(libraries)) {
            this.libraries = [libraries];
        } else {
            this.libraries = libraries;
        }
        this.libraries = this.libraries.map((x: any) => x.toLocaleLowerCase())

        if (!Array.isArray(servers)) {
            this.servers = [servers];
        } else {
            this.servers = servers;
        }
        this.servers = this.servers.map((x: any) => x.toLocaleLowerCase())

        if (this.users.length === 0 && this.libraries.length === 0 && this.servers.length === 0) {
            this.logger.warn('Initializing, but with no filters! All tracks from all users on all servers and libraries will be scrobbled.');
        } else {
            this.logger.info(`Initializing with the following filters => Users: ${this.users.length === 0 ? 'N/A' : this.users.join(', ')} | Libraries: ${this.libraries.length === 0 ? 'N/A' : this.libraries.join(', ')} | Servers: ${this.servers.length === 0 ? 'N/A' : this.servers.join(', ')}`);
        }
        this.initialized = true;
    }

    static formatPlayObj(obj: any, options: FormatPlayObjectOptions = {}): PlayObject {
        const {newFromSource = false} = options;
        const {
            event,
            Account: {
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                title: user,
            } = {},
            Metadata: {
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                type,
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                title: track,
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                parentTitle: album,
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                grandparentTitle: artist, // OR album artist
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                librarySectionTitle: library,
                // plex returns the track artist as originalTitle (when there is an album artist)
                // otherwise this is undefined
                // @ts-expect-error
                originalTitle: trackArtist
            } = {},
            Server: {
                // @ts-expect-error TS(2525): Initializer provides no value for this binding ele... Remove this comment to see the full error message
                title: server
            } = {},
            Player: {
                title,
                uuid,
            }
        } = obj;

        let artists: string[] = [];
        let albumArtists: string[] = [];
        if(trackArtist !== undefined) {
            artists.push(trackArtist);
            albumArtists.push(artist);
        } else {
            artists.push(artist);
        }
        return {
            data: {
                artists,
                albumArtists,
                album,
                track,
                playDate: dayjs(),
            },
            meta: {
                event,
                mediaType: type,
                user,
                library,
                server,
                source: 'Plex',
                newFromSource,
                deviceId: combinePartsToString([shortDeviceId(uuid), title])
            }
        }
    }

    protected logFilterFailure = (str: string, meta?: any) => {
        const {
            data: {
                options: {
                    logFilterFailure = 'warn'
                } = {}
            } = {}
        } = this.config;

        if(logFilterFailure === false || !['warn','debug'].includes(logFilterFailure)) {
            return false;
        }

        this.logger[logFilterFailure](str, meta);
    }

    isValidEvent = (playObj: PlayObject) => {
        const {
            meta: {
                mediaType, event, user, library, server
            },
            data: {
                artists,
                track,
            } = {}
        } = playObj;

        const hint = this.type === 'tautulli' ? ' (Check notification agent json data configuration)' : '';

        if (event !== undefined && event !== 'media.scrobble') {
            this.logger.debug(`Will not scrobble event because it is not media.scrobble (${event})`, {
                artists,
                track
            })
            return false;
        }

        if (mediaType !== 'track') {
            this.logger.debug(`Will not scrobble event because media type was not a track (${mediaType})`, {
                artists,
                track
            });
            return false;
        }

        if (this.users.length !== 0) {
            if (user === undefined) {
                this.logFilterFailure(`Config defined users but payload contained no user info${hint}`);
            } else if (!this.users.includes(user.toLocaleLowerCase())) {
                this.logFilterFailure(`Will not scrobble event because author was not an allowed user. Expected: ${this.users.map(x => `'${x}'`).join(' or ')} | Found: '${user.toLocaleLowerCase()}'`, {
                    artists,
                    track
                })
                return false;
            }
        }

        if (this.libraries.length !== 0) {
            if (library === undefined) {
                this.logFilterFailure(`Config defined libraries but payload contained no library info${hint}`);
            } else if (!this.libraries.includes(library.toLocaleLowerCase())) {
                this.logFilterFailure(`Will not scrobble event because library was not an allowed library. Expected: ${this.libraries.map(x => `'${x}'`).join(' or ')} | Found: '${library.toLocaleLowerCase()}'`, {
                    artists,
                    track
                })
                return false;
            }
        }

        if (this.servers.length !== 0) {
            if (server === undefined) {
                this.logFilterFailure(`Config defined server but payload contained no server info${hint}`);
            } else if (!this.servers.includes(server.toLocaleLowerCase())) {
                this.logFilterFailure(`Will not scrobble event because server was not an allowed server. Expected: ${this.servers.map(x => `'${x}'`).join(' or ')} | Found: '${server.toLocaleLowerCase()}'`, {
                    artists,
                    track
                })
                return false;
            }
        }

        return true;
    }

    handle = async (playObj: any) => {
        if (!this.isValidEvent(playObj)) {
            return;
        }

        try {
            const discovered = this.discover([playObj]);
            this.scrobble(discovered);
        } catch (e) {
            this.logger.error('Encountered error while scrobbling')
            this.logger.error(e)
        }
    }
}

export const plexRequestMiddle = () => {

    const plexLog = winston.loggers.get('app').child({labels: ['Plex Request']}, mergeArr);

    return async (req: any, res: any, next: any) => {

        const form = formidable({
            allowEmptyFiles: true,
            multiples: true,
            // issue with typings https://github.com/node-formidable/formidable/issues/821
            // @ts-ignore
            fileWriteStreamHandler: (file: any) => {
                return concatStream((data: any) => {
                    file.buffer = data;
                });
            }
        });
        form.on('progress', (received: any, expected: any) => {
            plexLog.debug(`Received ${received} bytes of expected ${expected}`);
        });
        form.on('error', (err: any) => {
            plexLog.error(err);
        })
        form.on('aborted', () => {
            plexLog.warn('Request aborted')
        })
        form.on('end', () => {
            plexLog.debug('Received end of form data from Plex');
        });
        form.on('fileBegin', (formname: any, file: any) => {
            plexLog.debug(`File Begin: ${formname}`);
        });
        form.on('file', (formname: any) => {
            plexLog.debug(`File Received: ${formname}`);
        });


        plexLog.debug('Receiving request from Plex...');

        return new Promise((resolve, reject) => {
            form.parse(req, (err: any, fields: any, files: any) => {
                if (err) {
                    plexLog.error('Error occurred while parsing formdata');
                    plexLog.error(err);
                    next(err);
                    reject(err);
                    return;
                }

                let validFile = null;
                for (const namedFile of Object.values(files)) {
                    // @ts-expect-error TS(2571): Object is of type 'unknown'.
                    if (namedFile.mimetype.includes('json')) {
                        validFile = namedFile;
                        break;
                    }
                }
                if (validFile === null) {
                    // @ts-expect-error TS(2571): Object is of type 'unknown'.
                    const err = new Error(`No files parsed from formdata had a mimetype that included 'json'. Found files:\n ${Object.entries(files).map(([k, v]) => `${k}: ${v.mimetype}`).join('\n')}`);
                    plexLog.error(err);
                    next(err);
                    reject(err);
                    return;
                }

                const payloadRaw = validFile.buffer.toString();
                let payload = null;
                try {
                    payload = JSON.parse(payloadRaw);
                    req.payload = payload;
                    next();
                    // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
                    resolve();
                } catch (e) {
                    plexLog.error(`Error occurred while trying to parse Plex file payload to json. Raw text:\n${payloadRaw}`);
                    plexLog.error(e);
                    next(e);
                    reject(e);
                }
            });
        });
    };
}
