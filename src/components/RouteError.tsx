import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function RouteError() {
    const error = useRouteError();

    let message = "Something unexpected happened.";
    if (isRouteErrorResponse(error)) {
        message = `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <main id="main">
            <title>Error — Martingale Wall Simulator</title>
            <h1>Something went wrong</h1>
            <p>{message}</p>
            <Link to="/">Back to the start</Link>
        </main>
    );
}
