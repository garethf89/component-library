import { useButton } from "@react-aria/button"
import { FocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import type { AriaButtonProps } from "@react-types/button"
import { RefObject, useRef } from "react"

import { components } from "../../system/system"
import { ThemingProps } from "../../system/types"
import BaseStyles from "./ButtonStyles"

type ButtonProps = AriaButtonProps &
    ThemingProps & {
        isLoading?: boolean
    }

const ButtonElement = components("button")

const THEME_KEY = "styles.button"

/**
 *
 * 1) Get base styles for the theme
 * 2) Get all styles from the theme (this will allow user base overrides)
 * 3) Get all ARIA styles
 * 4) Now the props from the instance
 *
 */
const Button = ({
    children,
    isLoading = false,
    onPress,
    ...props
}: ButtonProps): React.ReactElement => {
    const ref = useRef(null)

    const userProps = { isLoading, ...props }

    const { buttonProps } = useButton(
        { ...userProps, onPress },
        ref as RefObject<HTMLElement>
    )
    const BASE_BUTTON_STYLES = BaseStyles(THEME_KEY)
    const propsMerged = mergeProps(BASE_BUTTON_STYLES, buttonProps, userProps)

    if (propsMerged.variant) {
        propsMerged.variant = `buttons.${propsMerged.variant}`
    }

    return (
        <FocusRing>
            <ButtonElement {...propsMerged} ref={ref}>
                {children}
            </ButtonElement>
        </FocusRing>
    )
}

export default Button
