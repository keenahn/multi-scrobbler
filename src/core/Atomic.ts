import {Dayjs} from "dayjs";
import {MESSAGE} from "triple-beam";

export interface SourceStatusData {
    status: string;
    type: "spotify" | "plex" | "tautulli" | "subsonic" | "jellyfin" | "lastfm" | "deezer" | "ytmusic" | "mpris" | "mopidy" | "listenbrainz" | "jriver" | "kodi";
    display: string;
    tracksDiscovered: number;
    name: string;
    canPoll: boolean;
    hasAuth: boolean;
    hasAuthInteraction: boolean;
    authed: boolean;
    players: Record<string, SourcePlayerJson>
}

export interface ClientStatusData {
    status: string;
    type: "maloja" | "lastfm" | "listenbrainz";
    display: string;
    tracksDiscovered: number;
    name: string;
    hasAuth: boolean;
    hasAuthInteraction: boolean;
    authed: boolean;
    initialized: boolean;
}

export type PlayObjectIncludeTypes = 'time' | 'artist' | 'track' | 'timeFromNow' | 'trackId';
export const recentIncludes: PlayObjectIncludeTypes[] = ['time', 'timeFromNow', 'track', 'artist'];

export interface TrackStringOptions<T = string> {
    include?: PlayObjectIncludeTypes[]
    transformers?: {
        artists?: (a: string[]) => T | string
        track?: (t: string,data: AmbPlayObject, hasExistingParts?: boolean) => T | string
        time?: (t: Dayjs) => T | string
        timeFromNow?: (t: Dayjs) => T | string
        reducer?: (arr: (T | string)[]) => T //(acc: T, curr: T | string) => T
    }
}

export interface PlayProgress {
    timestamp: Dayjs
    position?: number
    positionPercent?: number
}

export type ListenRange = [PlayProgress, PlayProgress]

export interface TrackData {
    artists?: string[]
    album?: string
    track?: string
    /**
     * The length of the track, in seconds
     * */
    duration?: number

    meta?: {
        brainz?: {
            artist?: string
            albumArtist?: string
            album?: string
            track?: string
            releaseGroup?: string
        }
    }
}

export interface PlayData extends TrackData {
    /**
     * The date the track was played at
     * */
    playDate?: Dayjs | string
    /** Number of seconds the track was listened to */
    listenedFor?: number
    listenRanges?: ListenRange[]
}

export interface PlayMeta {
    source?: string

    /**
     * Specifies from what facet/data from the source this play was parsed from IE history, now playing, etc...
     * */
    parsedFrom?: string
    /**
     * Unique ID for this track, given by the Source
     * */
    trackId?: string

    /**
     * Atomic ID for this instance of played tracked IE a unique ID for "this track played at this time"
     * */
    playId?: string
    newFromSource?: boolean
    url?: {
        web: string
        [key: string]: string
    }
    user?: string
    mediaType?: string
    server?: string
    library?: string
    /**
     * The position the "player" is at in the track at the time the play was reported, in seconds
     * */
    trackProgressPosition?: number
    /**
     * A unique identifier for the device playing this track
     * */
    deviceId?: string

    nowPlaying?: boolean

    /**
     * A MusicBrainz Recording ID
     * */
    mbid?: string

    [key: string]: any
}

export interface AmbPlayObject {
    data: PlayData,
    meta: PlayMeta
}

export interface PlayObject extends AmbPlayObject {
    data: ObjectPlayData,
}

export interface JsonPlayObject extends AmbPlayObject {
    playDate?: string
}

export interface ObjectPlayData extends PlayData {
    playDate?: Dayjs
}

export type LogLevel = "error" | "warn" | "info" | "verbose" | "debug";
export const logLevels = ['error', 'warn', 'info', 'verbose', 'debug'];

export interface LogInfo {
    message: string
    [MESSAGE]: string,
    level: string
    timestamp: string
    labels?: string[]
    transport?: string[]
}

export interface LogOutputConfig {
    level: LogLevel,
    sort: string,
    limit: number
}

export interface LogInfoJson extends LogInfo {
    formattedMessage: string
}

export interface SourcePlayerObj {
    platformId: string,
    play: PlayObject,
    playFirstSeenAt: string,
    playLastUpdatedAt: string,
    playerLastUpdatedAt: string
    position?: number
    listenedDuration: number
    status: {
        reported: string
        calculated: string
        stale: boolean
        orphaned: boolean
    }
}

export interface SourcePlayerJson extends Omit<SourcePlayerObj, 'play'> {
    play: JsonPlayObject
}
