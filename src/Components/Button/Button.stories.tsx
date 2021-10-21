import { Meta, Story } from "@storybook/react"
import * as React from "react"

import Button from "./Button"

const buttonTypes = ["primary", "secondary"]

const ButtonStory: Story = ({
    label,
    variant,
    isLoading = false,
}): React.ReactElement => (
    <>
        <Button
            onPress={() => alert("CLICKED")}
            type="submit"
            variant={variant}
            isLoading={isLoading}
        >
            {label}
        </Button>
    </>
)

export default {
    title: "Button",
} as Meta

const commonArgs = { label: "Button Text" }

export const Primary = ButtonStory.bind({})
Primary.args = {
    ...commonArgs,
    variant: "primary",
}

export const Secondary = ButtonStory.bind({})
Secondary.args = {
    ...commonArgs,
    variant: "secondary",
}
