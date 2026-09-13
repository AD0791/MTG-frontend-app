import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { expect, test } from "vitest";
import {routes} from "./router";

test("/history renders the history page and marks only its nav link current", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/history"] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { level: 1, name: /past runs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "History" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Theory" })).not.toHaveAttribute("aria-current");
});

test("an unknown URL renders the not found page", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/no-such-page"] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { level: 1, name: /not found/i })).toBeInTheDocument();
});
