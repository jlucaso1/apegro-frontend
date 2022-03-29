import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
  parameters: {
    componentSubtitle: "A button component.",
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  label: "Button",
};
