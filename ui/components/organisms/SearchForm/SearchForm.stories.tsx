import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchForm } from "./SearchForm";

export default {
  component: SearchForm,
  title: "Organism/SearchForm",
  parameters: {
    componentSubtitle: "A SearchForm component.",
  },
} as ComponentMeta<typeof SearchForm>;
const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} />
);

export const BasicSearchForm = Template.bind({});
