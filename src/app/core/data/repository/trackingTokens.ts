import { TrackingTokensRepository as TrackingTokensRepositoryInterface, TrackingTokens } from '@/app/core/entities/trackingTokens';
import { TrackingTokens as Data } from '@/app/core/data/local/trackingTokens';

export class TrackingTokensRepository implements TrackingTokensRepositoryInterface {
    getTokens(): TrackingTokens {
        return Data;
    }
}