import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchPage from "./SearchPage";

export default {
  component: SearchPage,
  title: "Pages/SearchPage",
  parameters: {
    componentSubtitle: "A SearchPage component.",
  },
} as ComponentMeta<typeof SearchPage>;
const Template: ComponentStory<typeof SearchPage> = (args) => (
  <SearchPage {...args} />
);

export const BasicSearchPage = Template.bind({});
