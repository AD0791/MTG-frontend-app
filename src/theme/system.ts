import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react';
import {buttonRecipe} from './button';
import {decoration, surfaces, text, type Pair} from './palette';

const mode  = (pair:Pair)=>({
    value:{_ligth:pair.light, _dark:pair.dark},
});

const config = defineConfig({
    theme:{
        breakpoints:{
            md:"48rem",
            xl:"72rem",
        },
        tokens:{
            fonts:{
                body: { value: 'ui-sans-serif, -apple-system, "Segoe UI", Roboto, sans-serif' },
                heading: { value: 'ui-sans-serif, -apple-system, "Segoe UI", Roboto, sans-serif' },
                mono: { value: 'ui-monospace, SFMono-Regular, Menlo, "Cascadia Mono", monospace' },  
            },
        },
        semanticTokens:{
            colors:{
                bg: {
                    DEFAULT: mode(surfaces.bg),
                    panel: mode(surfaces.panel),
                    muted: mode(surfaces.muted),
                },
                fg: {
                    DEFAULT: mode(text.fg),
                    muted: mode(text.fgMuted),
                },
                border: {
                    DEFAULT: mode(decoration.border),
                },
                accent: {
                    DEFAULT: mode(text.accent),
                    dim: mode(decoration.accentDim),
                },
                band: {
                    calm: mode(text.calm),
                    caution: mode(text.caution),
                    elevated: mode(text.elevated),
                    danger: mode(text.danger),
                },
                drawdown: {
                    heavy: mode(text.heavy),
                    severe: mode(text.severe),
                    critical: mode(text.critical),
                    terminal: mode(text.terminal),
                },
                wall: {
                    tint: mode(decoration.wallTint),
                },
                zebra: mode(decoration.zebra),
                backdrop: mode(decoration.backdrop),
                gray: {
                    focusRing: { value: "{colors.accent}" },
                },
            },
        },
        textStyles:{
            figure:{
                value:{
                    fontFamily:"mono",
                    fontVariantNumeric:"tabular-nums",
                },
            },
        },
        recipes:{
            button:buttonRecipe,
        },
    },
    globalCss:{
        body:{
            lineHeight:"1.65",
        },
        a:{
            color:"accent",
        },
        "*:focus-visible":{
            outline:"2px solid",
            outlineColor:"accent",
            outlineOffset:"2px",
        },
        '[aria-current="page"]':{
            fontWeight:"bold",
        },
        ".skip-link":{
            position:"absolute",
            top:"2",
            left:"4",
            px:"4",
            py:"2",
            bg:"bg.panel",
            clipPath:"inset(50%)",
            _focus:{
                clipPath:"none",
            },
        },
        "main:focus":{
            outline:"none",
        },
        '[data-state="open"], [data-state="closed"]':{
            _motionReduce:{
                animationDuration:"1ms !important",
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
