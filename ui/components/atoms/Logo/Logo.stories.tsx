import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  component: Logo,
  title: "Atoms/Logo",
  parameters: {
    componentSubtitle: "A Logo component.",
  },
} as ComponentMeta<typeof Logo>;
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const BasicLogo = Template.bind({});
BasicLogo.args = {
  src: "https://i.imgur.com/nPq34Hv.png",
};
