import { expect, test } from "vitest";
import { surfaces, text } from "./palette";

// WCAG 2.2 relative luminance of a #rrggbb colour.
function luminance(hex: string): number {
    const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const [r = 0, g = 0, b = 0] = channels.map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
    const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
    return (light + 0.05) / (dark + 0.05);
}

const cases = (["light", "dark"] as const).flatMap((mode) =>
    Object.entries(text).flatMap(([textName, textPair]) =>
        Object.entries(surfaces).map(([surfaceName, surfacePair]) => ({
            mode,
            textName,
            surfaceName,
            ratio: contrast(textPair[mode], surfacePair[mode]),
        })),
    ),
);

test.each(cases)("$mode: $textName on $surfaceName reaches 4.5:1", ({ ratio }) => {
    expect(ratio).toBeGreaterThanOrEqual(4.5);
});
