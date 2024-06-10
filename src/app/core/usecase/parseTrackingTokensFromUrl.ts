import { 
    TrackingTokensRepository, 
    ParseTrackingTokensFromUrl as Interface, 
    TrackingTokens 
} from "@/app/core/entities/trackingTokens";

/**
 * ParseTrackingTokensFromUrl parses tracking tokens from a urls query string
 */
export class ParseTrackingTokensFromUrl implements Interface {
        
    public parse(urlStr: string): TrackingTokens {
        const url = new URL(urlStr)
        let tokens:TrackingTokens = []
        url.searchParams.sort()
        url.searchParams.forEach((value, key) => key.startsWith('token') && tokens.push(value))
        return tokens
    }

}