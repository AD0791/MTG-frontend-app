import {createBrowserRouter, type RouteObject} from "react-router";
import Layout from "../components/Layout";
import RouteError from "../components/RouteError";

export const routes: RouteObject[] = [
    {
        Component: Layout,
        ErrorBoundary: RouteError,
        HydrateFallback: () => <p>Loading...</p>,
        children: [
            { index: true, lazy: () => import("../pages/TheoryPage").then((m) => ({ Component: m.default })) },
            { path: "simulator", lazy: () => import("../pages/SimulatorPage").then((m) => ({ Component: m.default })) },
            { path: "results/:id", lazy: () => import("../pages/ResultPage").then((m) => ({ Component: m.default })) },
            { path: "results/group/:runGroup", lazy: () => import("../pages/ComparisonPage").then((m) => ({ Component: m.default })) },
            { path: "history", lazy: () => import("../pages/HistoryPage").then((m) => ({ Component: m.default })) },
            { path: "*", lazy: () => import("../pages/NotFoundPage").then((m) => ({ Component: m.default })) },
        ],
    },
];

export const router = createBrowserRouter(routes);
