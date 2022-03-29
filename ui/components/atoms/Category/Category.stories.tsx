import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Category } from "./Category";

export default {
  component: Category,
  title: "Atoms/Category",
  parameters: {
    componentSubtitle: "A Category component.",
  },
} as ComponentMeta<typeof Category>;
const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const BasicCategory = Template.bind({});
BasicCategory.args = {
  name: "movie",
};
