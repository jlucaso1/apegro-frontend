import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchResult } from "./SearchResult";

export default {
  component: SearchResult,
  title: "Molecules/SearchResult",
  parameters: {
    componentSubtitle: "A SearchResult component.",
  },
  argTypes: {
    jokes: {
      control: {
        type: "array",
      },
    },
  },
} as ComponentMeta<typeof SearchResult>;
const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const BasicSearchResult = Template.bind({});
