import { TrackingTokensRepository as TrackingTokensRepositoryInterface, TrackingTokens } from '@/core/entities/trackingTokens';
import { TrackingTokens as Data } from '@/core/data/local/trackingTokens';

export class TrackingTokensRepository implements TrackingTokensRepositoryInterface {
    getTokens(): TrackingTokens {
        return Data;
    }
}