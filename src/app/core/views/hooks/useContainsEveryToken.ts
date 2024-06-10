import { useDependencies } from "@/app/core/views/providers/dependencies"
import { useState, useCallback } from "react"
import { TrackingTokens } from "@/app/core/entities/trackingTokens"

export type State = {
    containsEveryTokenResponse: {
        status: "idle" | "loading" | "success" | "error",
    }
    containsEveryToken(tokens:TrackingTokens): void
}

export function useContainsEveryToken() {
    const { ContainsEveryTrackingToken } = useDependencies()
    const [containsEveryTokenResponse, setResponse] = useState<State["containsEveryTokenResponse"]>({
        status: "idle",
    })
    const containsEveryToken = useCallback(async (tokens:TrackingTokens) => {
        setResponse({ status: "loading" })
        try {
            const result = await ContainsEveryTrackingToken.compare(tokens)
            if (result) setResponse({ status: "success" })
            else setResponse({ status: "error" })
        } catch (e) {
            console.error(e)
            setResponse({ status: "error" })
        }
    }, [ContainsEveryTrackingToken, setResponse])
    return {
        containsEveryTokenResponse,
        containsEveryToken
    }
}