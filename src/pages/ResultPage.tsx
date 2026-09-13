import { useParams } from "react-router";

type ResultPageParams = {
    id: string;
};

export default function ResultPage() {
    const { id = "?" } = useParams<ResultPageParams>();

    return (
        <>
            <title>{`Run #${id} — Martingale Wall Simulator`}</title>
            <h1>Run #{id}</h1>
        </>
    );
}
