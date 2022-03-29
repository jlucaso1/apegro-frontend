import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";

export default {
  component: Layout,
  title: "Templates/Layout",
  parameters: {
    componentSubtitle: "A Layout component.",
  },
} as ComponentMeta<typeof Layout>;
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  children: <div>Hello World</div>,
};
