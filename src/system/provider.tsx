import {
    Theme,
    ThemeContext,
    ThemeProvider as EmotionThemeProvider,
} from "@emotion/react"
import { jsx } from "@theme-ui/core"
import { css } from "@theme-ui/css"
import { ReactNode, useContext } from "react"

export type WithTheme<Props> = Props & { theme: Theme }

export type ThemeProviderProps = {
    theme: Theme | ((outerTheme: Theme) => Theme)
    children?: ((theme: Theme) => ReactNode) | ReactNode
}

const RootStyles = () =>
    jsx("style", {
        styles: (emotionTheme: Theme) => {
            const theme = emotionTheme
            const { useRootStyles } = theme.config || theme

            if (
                useRootStyles === false ||
                (theme.styles && !theme.styles.root)
            ) {
                return null
            }

            const boxSizing = "border-box"

            return css({
                "*": {
                    boxSizing,
                },
                html: {
                    variant: "styles.root",
                },
                body: {
                    margin: 0,
                },
            })(theme)
        },
    })

export const ThemeProvider = ({
    children,
    theme,
}: ThemeProviderProps): React.ReactElement<ThemeProviderProps> => {
    return (
        <EmotionThemeProvider theme={theme}>
            <RootStyles />
            {children}
        </EmotionThemeProvider>
    )
}

export const useTheme = (): Theme => useContext(ThemeContext) as Theme
