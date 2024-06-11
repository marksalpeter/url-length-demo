import { useEffect } from "react"
import { useContainsEveryToken } from "@/core/views/hooks/useContainsEveryToken"
import { useFetchTrackingUrl } from "@/core/views/hooks/useFetchTrackingUrl"
import { useUserAgent } from "@/core/views/hooks/useUserAgent"


/**
 * Experiment calls a large tracking url with 20 tokens in the query params of the url.
 * If the endpoint is able to successfully parse and return all 20 tokens, the experiment is a success.
 */
export function Experiment() {
    // Import dependencies
    const { fetchTrackingUrl, fetchTrackingUrlResponse } = useFetchTrackingUrl()
    const { containsEveryToken, containsEveryTokenResponse } = useContainsEveryToken()
    const { userAgent } = useUserAgent()

    // Fetch the tracking url when the component mounts
    useEffect(() => {
        fetchTrackingUrl()
    }, [])

    // Compare the tokens when the fetchTrackingUrlResponse is successful
    useEffect(() => {
        if (fetchTrackingUrlResponse.status === "success") containsEveryToken(fetchTrackingUrlResponse.tokens!)
    }, [containsEveryToken, fetchTrackingUrlResponse.tokens, fetchTrackingUrlResponse.status])

    // Display status messages to the user
    return (<>
        <p className="font-bold text-md bottom-1">
            {userAgent}
        </p>
        <p>
           Calling the tracking url..
        </p>
        {fetchTrackingUrlResponse.status === "success" && <p>Url made round trip to server...</p>}
        {containsEveryTokenResponse.status === "success" && <p>Tokens made the round trip intact...</p>}
        {fetchTrackingUrlResponse.status === "error" && <p className="text-red-600 font-bold">Failed server roundtrip</p>}
        {containsEveryTokenResponse.status === "error" && <p className="text-red-600 font-bold">Tokens failed to parse</p>}
        {fetchTrackingUrlResponse.status === "success" && containsEveryTokenResponse.status === "success" && <p className="text-green-600 font-bold">Success!</p>}
    </>)
}