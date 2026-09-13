import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <>
            <title>Not found — Martingale Wall Simulator</title>
            <h1>Not found</h1>
            <p>There is no page at this address.</p>
            <Link to="/">Back to the start</Link>
        </>
    );
}
