import { useGetStyleFromTheme } from "../../hooks/useGetStyleFromTheme"
import { useTheme } from "../../system/provider"

const BaseStyles = (themeKey: string): Record<string, string | number> => {
    const theme = useTheme()
    const themeStyles = useGetStyleFromTheme(themeKey, theme)
    return {
        fontSize: 1,
        padding: 3,
        css: {
            fontFamily: theme.fonts?.body,
            borderRadius: "5px",
            textAlign: "center",
            scale: "scale(0)",
            transition: "0.25s ease-out",
            cursor: "pointer",
            letterSpacing: "4px",
            textTransform: "uppercase",
            position: "relative",
            textDecoration: "none",
            ...themeStyles,
        },
    }
}

export default BaseStyles
