import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
  component: Header,
  title: "Organisms/Header",
  parameters: {
    componentSubtitle: "A Header component.",
  },
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const BasicHeader = Template.bind({});
BasicHeader.args = {
  src: "https://i.imgur.com/nPq34Hv.png",
}