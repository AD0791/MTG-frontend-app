import {ChakraProvider} from "@chakra-ui/react";
import {ThemeProvider} from "next-themes";
import type {ReactNode} from "react";
import {system} from "../theme/system";

export default function Providers({children}: {children: ReactNode}) {
    return(
        <ChakraProvider value={system}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </ChakraProvider>
    );
}