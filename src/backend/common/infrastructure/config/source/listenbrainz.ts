import { CommonSourceConfig, CommonSourceData } from "./index";
import { ListenBrainzData } from "../client/listenbrainz";
import {PollingOptions} from "../common";

export interface ListenBrainzSourceData extends ListenBrainzData, CommonSourceData, PollingOptions {
}

export interface ListenBrainzSourceConfig extends CommonSourceConfig {
    /**
     * When used in `listenbrainz.config` this tells multi-scrobbler whether to use this data to configure a source or client.
     *
     * @default source
     * @examples ["source"]
     * */
    configureAs?: 'source'
    data: ListenBrainzSourceData
}

export interface ListenBrainzSourceAIOConfig extends ListenBrainzSourceConfig {
    type: 'listenbrainz'
}
