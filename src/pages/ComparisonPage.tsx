import { useParams } from "react-router";

type ComparisonPageParams = {
    runGroup: string;
};

export default function ComparisonPage() {
    const { runGroup = "?" } = useParams<ComparisonPageParams>();

    return (
        <>
            <title>Comparison — Martingale Wall Simulator</title>
            <h1>Strategies compared</h1>
            <p>Run group: {runGroup}</p>
        </>
    );
}
