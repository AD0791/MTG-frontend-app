export type Pair = { light: string; dark: string };

export const surfaces = {
    bg: { light: "#ffffff", dark: "#0a0c10" },
    panel: { light: "#f6f8fa", dark: "#12151c" },
    muted: { light: "#eaeef2", dark: "#1a1f29" },
} satisfies Record<string, Pair>;

export const text = {
    fg: { light: "#1f2328", dark: "#e6e9ef" },
    fgMuted: { light: "#59636e", dark: "#8b95a7" },
    accent: { light: "#0966d3", dark: "#4d9fff" },
    calm: { light: "#197a35", dark: "#3fb950" },
    caution: { light: "#916100", dark: "#d29922" },
    elevated: { light: "#b44900", dark: "#f0883e" },
    danger: { light: "#cf222e", dark: "#f85149" },
    heavy: { light: "#7d4dd6", dark: "#a371f7" },
    severe: { light: "#6639ba", dark: "#c297ff" },
    critical: { light: "#512a97", dark: "#e2a8ff" },
    terminal: { light: "#b73784", dark: "#ff8dd1" },
} satisfies Record<string, Pair>;

export const decoration = {
    border: { light: "#d1d9e0", dark: "#262d3a" },
    accentDim: { light: "#ddf4ff", dark: "#1c3f6b" },
    wallTint: { light: "rgb(207 34 46 / 8%)", dark: "rgb(248 81 73 / 8%)" },
    zebra: { light: "rgb(31 35 40 / 3%)", dark: "rgb(255 255 255 / 2%)" },
    backdrop: { light: "rgb(31 35 40 / 50%)", dark: "rgb(10 12 16 / 70%)" },
} satisfies Record<string, Pair>;
