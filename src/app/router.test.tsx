import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { expect, test } from "vitest";
import Providers from "./providers";
import { routes } from "./router";

function renderAt(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
        <Providers>
            <RouterProvider router={router} />
        </Providers>,
    );
}

test("/history renders the history page and marks only its nav link current", async () => {
    renderAt("/history");

    expect(await screen.findByRole("heading", { level: 1, name: /past runs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "History" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Theory" })).not.toHaveAttribute("aria-current");
});

test("an unknown URL renders the not found page", async () => {
    renderAt("/no-such-page");

    expect(await screen.findByRole("heading", { level: 1, name: /not found/i })).toBeInTheDocument();
});
