import { 
    TrackingTokens, 
    ContainsEveryTrackingToken as Interface, 
    TrackingTokensRepository 
} from "@/core/entities/trackingTokens";

/**
 * CompareTrackingTokens checks if a url contains all the tracking tokens
 */
export class ContainsEveryTrackingToken implements Interface {
    
    constructor(
        private readonly repo: TrackingTokensRepository
    ) {}

    public async compare(tokens: TrackingTokens): Promise<boolean> {
        const repoTokens = await this.repo.getTokens()
        return repoTokens.every(token => tokens.includes(token))
    }

}