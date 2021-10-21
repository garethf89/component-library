import { base as baseTheme } from "@theme-ui/presets"

export const theme = {
    ...baseTheme,
    config: { useRootStyles: true },
    fonts: {
        body: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
        heading: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    buttons: {
        primary: {
            color: "white",
            bg: "primary",
        },
        secondary: {
            color: "black",
            bg: "secondary",
        },
    },
    styles: {
        root: {
            fontFamily: "body",
        },
    },
}

export type Theme = typeof theme
