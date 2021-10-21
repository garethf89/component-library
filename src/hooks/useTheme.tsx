import { ThemeContext } from "@emotion/react"
import { useContext } from "react"

import type { Theme } from "../theme"

export const useTheme = (): Theme => useContext(ThemeContext) as Theme
