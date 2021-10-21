import styled from "@emotion/styled"
import color from "@styled-system/color"
import space from "@styled-system/space"
import typography from "@styled-system/typography"
import { css, get } from "@theme-ui/css"
import React from "react"

import { domElements } from "./elements"
import { SystemProps } from "./props"
import { As } from "./types"
import { shouldForwardProp } from "./utils"

export type SystemComponent<T extends As, P = any> = {
    (
        props: SystemProps & React.ComponentProps<T> & { as?: As } & P
    ): JSX.Element
    displayName?: string
    propTypes?: React.WeakValidationMap<any>
    contextTypes?: React.ValidationMap<any>
    defaultProps?: Partial<any>
    id?: string
}

const variants = ({ theme, variant, __themeKey = "variants" }: any) =>
    css(get(theme, __themeKey + "." + variant, get(theme, variant)))

export const CreateStyled = <T extends As, P = any>(
    component: T
): SystemComponent<T, P> => {
    return styled(component as React.ComponentType<any>, {
        shouldForwardProp,
    })(
        variants as any,
        color,
        space,
        typography,
        props => props.css
    ) as SystemComponent<T, P>
}

type Factory = {
    <T extends As, P = unknown>(component: T): SystemComponent<T, P>
}

export type HTMLComponents = {
    [Tag in typeof domElements[number]]: SystemComponent<Tag, any>
}

export const components = CreateStyled as unknown as Factory & HTMLComponents

domElements.forEach(tag => {
    components[tag] = CreateStyled(tag)
})
