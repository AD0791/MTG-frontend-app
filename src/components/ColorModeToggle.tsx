import { Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export default function ColorModeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <Button variant="quiet" aria-pressed={isDark} onClick={() => setTheme(isDark ? "light" : "dark")}>
            Dark mode
        </Button>
    );
}
