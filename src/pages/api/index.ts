import { ParseTrackingTokensFromUrl } from '@/core/usecase/parseTrackingTokensFromUrl';
import type { NextApiRequest, NextApiResponse } from 'next'

// Dependencies
const parseTrackingTokensFromUrl = new ParseTrackingTokensFromUrl()

type ResponseData = {
    tokens: string[]
}

export default function handler(request: NextApiRequest, response: NextApiResponse<ResponseData>) {
    const tokens = parseTrackingTokensFromUrl.parse(`http://${process.env.HOST ?? 'localhost'}${request.url}`)
    response.json({ tokens })
}