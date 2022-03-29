import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CategoryList } from "./CategoryList";

export default {
  component: CategoryList,
  title: "Molecules/CategoryList",
  parameters: {
    componentSubtitle: "A CategoryList component.",
  },
} as ComponentMeta<typeof CategoryList>;
const Template: ComponentStory<typeof CategoryList> = (args) => (
  <CategoryList {...args} />
);

export const BasicCategoryList = Template.bind({});
BasicCategoryList.args = {
  categories: ["movie", "tv", "book", "music"],
};
