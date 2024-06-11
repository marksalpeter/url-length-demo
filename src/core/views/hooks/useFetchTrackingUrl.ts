import { useCallback, useState } from "react"
import { useDependencies } from "@/core/views/providers/dependencies"
import { TrackingTokens } from "../../entities/trackingTokens"

export type State = {
    fetchTrackingUrlResponse: {
        status: "idle" | "loading" | "success" | "error",
        tokens?: TrackingTokens,
    }
    fetchTrackingUrl(): void
}

export function useFetchTrackingUrl():State {
    const { FetchTrackingUrl } = useDependencies()
    const [fetchTrackingUrlResponse, setResponse] = useState<State["fetchTrackingUrlResponse"]>({
        status: "idle",
    })
    const fetchTrackingUrl = useCallback(async () => {
        setResponse({ status: "loading" })
        try {
            const tokens = await FetchTrackingUrl.fetch()
            setResponse({ status: "success", tokens })
        } catch (e) {
            console.error(e)
            setResponse({ status: "error" })
        }
    }, [FetchTrackingUrl, setResponse])
    return {
        fetchTrackingUrlResponse,
        fetchTrackingUrl
    }
}