import { useGetStyleFromTheme } from "../../hooks/useGetStyleFromTheme"
import { useTheme } from "../../system/provider"

const BaseStyles = (themeKey: string): Record<string, string> => {
    const theme = useTheme()
    const themeStyles = useGetStyleFromTheme(themeKey, theme)
    return {
        fontFamily: theme.fonts?.body,
        fontSize: 1,
        padding: 3,
        ...themeStyles,
    }
}

export default BaseStyles
