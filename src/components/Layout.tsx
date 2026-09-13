import { Link, NavLink, Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <nav aria-label="Primary">
                <Link to="/">Martingale Wall</Link>
                <ul>
                    <li>
                        <NavLink to="/" end>
                            Theory
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/simulator">Simulator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history">History</NavLink>
                    </li>
                </ul>
            </nav>

            <main id="main" tabIndex={-1}>
                <Outlet />
            </main>

            <footer>
                <p>
                    A deterministic worst-case simulator. It assumes every entry loses and reports where the
                    account can no longer place the next one. It does not model win probability, predict
                    markets, or suggest that the plan it models is profitable.
                </p>
            </footer>
        </>
    );
}
