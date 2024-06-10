import { TrackingTokensRepository } from "./core/data/repository/trackingTokens";
import { ContainsEveryTrackingToken } from "./core/usecase/containsEveryTrackingToken";
import { FetchTrackingUrl } from "./core/usecase/fetchTrackingUrl";
import { Dependencies, DependenciesProvider } from "./core/views/providers/dependencies";
import { PropsWithChildren } from "react";

// Initialize dependencies
const trackingTokensRepository = new TrackingTokensRepository();
const containsEveryToken = new ContainsEveryTrackingToken(trackingTokensRepository);
const fetchTrackingUrl = new FetchTrackingUrl(trackingTokensRepository);

const dependencies:Dependencies = {
    ContainsEveryTrackingToken: containsEveryToken,
    FetchTrackingUrl:fetchTrackingUrl
};

// Inject Dependencies into the React component tree
export default ({ children }:PropsWithChildren) => (
    <DependenciesProvider value={dependencies}>
        {children}
    </DependenciesProvider>
)