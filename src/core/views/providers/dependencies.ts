import { createContext, useContext } from "react"
import { 
    ContainsEveryTrackingToken, 
    FetchTrackingUrl, 
} from "@/core/entities/trackingTokens"

export type Dependencies = {
    ContainsEveryTrackingToken: ContainsEveryTrackingToken,
    FetchTrackingUrl: FetchTrackingUrl,
}

const context = createContext({} as Dependencies)

export const DependenciesProvider = context.Provider

export const useDependencies = () => useContext(context)