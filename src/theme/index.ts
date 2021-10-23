import { base as baseTheme } from "@theme-ui/presets"

export const COLORS = {
    transparent: `transparent`,
    black: `#000`,
    white: `#fff`,
    greyColor1: `#6D6D6D`,
    greyColor2: `#C0C0C0`,
    darkGrey1: `#E4EEEE`,
    gold: `#b3925d`,
    forest: `#609D91`,
}

export const theme = {
    ...baseTheme,
    config: { useRootStyles: true },
    fonts: {
        body: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
        heading: '"Ubuntu", Roboto, Helvetica, Arial, sans-serif',
    },
    colors: {
        ...baseTheme.colors,
        body: COLORS.black,
        bodyInverted: COLORS.white,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    buttons: {
        primary: {
            bg: "bodyInverted",
            color: "body",
            fontWeight: "bold",
            "&:hover": {
                color: "bodyInverted",
                bg: "body",
            },
        },
        secondary: {
            bg: "body",
            color: "bodyInverted",
            fontWeight: "bold",
            "&:hover": {
                color: "body",
                bg: "bodyInverted",
            },
        },
    },
    styles: {
        root: {
            fontFamily: "body",
        },
    },
}

export type Theme = typeof theme
