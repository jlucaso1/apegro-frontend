import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
  component: Input,
  title: "Atoms/Input",
  parameters: {
    componentSubtitle: "A Input component.",
  },
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  value: "",
};
