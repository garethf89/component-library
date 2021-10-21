import { ThemeProvider } from "../src/system/provider"
import { theme } from "../src/theme"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <div style={{ margin: "3em" }}>
                <Story />
            </div>
        </ThemeProvider>
    ),
]
