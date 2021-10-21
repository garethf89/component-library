import isPropValid from "@emotion/is-prop-valid"
import { color } from "@styled-system/color"
import { space } from "@styled-system/space"
import { typography } from "@styled-system/typography"

/**
 * List of props for emotion to omit from DOM.
 */
const allPropNames = new Set(["as", "__css", "css", "sx"])

export const propNames = new Set([
    ...color.propNames,
    ...space.propNames,
    ...typography.propNames,
])

export const shouldForwardProp = (prop: string): boolean =>
    isPropValid(prop) && !allPropNames.has(prop) && !propNames.has(prop)
