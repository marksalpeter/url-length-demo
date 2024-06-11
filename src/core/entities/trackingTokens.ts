// Models
export type TrackingToken = string;
export type TrackingTokens = TrackingToken[];

// Repository
export interface TrackingTokensRepository {
    getTokens(): TrackingTokens;
}

// Use cases
export interface FetchTrackingUrl {
    fetch(): Promise<TrackingTokens>
}
export interface ParseTrackingTokensFromUrl {
    parse(url:string):TrackingTokens
}
export interface ContainsEveryTrackingToken {
    compare(tokens:TrackingTokens):Promise<boolean>
}