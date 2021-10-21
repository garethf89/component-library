import { get } from "@theme-ui/css"
import { useMemo } from "react"

import { Theme } from "../theme"

export const useGetStyleFromTheme = (
    key: string,
    theme: Theme
): ReturnType<typeof get> =>
    useMemo(
        () => ({
            ...get(theme, key),
        }),
        [key]
    )
