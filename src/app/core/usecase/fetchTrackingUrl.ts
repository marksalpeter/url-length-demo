import { 
    TrackingTokensRepository, 
    FetchTrackingUrl as Interface, 
    TrackingTokens 
} from "@/app/core/entities/trackingTokens";

const url = typeof window !== "undefined"? window?.location?.href : ""

/**
 * FetchTrackingUrl fetches tracking tokens from an api endpoint
 * @returns TrackingTokens from the api endpoints body
 */
export class FetchTrackingUrl implements Interface {

    constructor(
        private readonly repo: TrackingTokensRepository,
        private readonly baseUrl = `${url}/api`
    ) {}

    public async fetch(): Promise<TrackingTokens> {
        const url = new URL(this.baseUrl);

        // Append all tokens to the url params
        const tokens = this.repo.getTokens()
        tokens.forEach((token, index) => 
            url.searchParams.append(`token[${index}]`, token))

        // Call the api endpoint
        const response = await fetch(url)
        const { tokens: responseTokens } = await response.json()

        // Return the tokens from the body of the api endpoint
        return responseTokens
    }
}