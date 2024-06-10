export const runtime = 'edge'; // 'nodejs' is the default
import { TrackingTokens } from '@/app/core/entities/trackingTokens';
import { ParseTrackingTokensFromUrl } from '@/app/core/usecase/parseTrackingTokensFromUrl';

// Dependencies
const parseTrackingTokensFromUrl = new ParseTrackingTokensFromUrl()

export function GET(request: Request) {
    const tokens = parseTrackingTokensFromUrl.parse(request.url)
    return new Response(JSON.stringify({
        tokens
    }), {
        status: 200,
    });
}