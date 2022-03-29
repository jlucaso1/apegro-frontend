import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoadingSpinner } from "./LoadingSpinner";

export default {
  component: LoadingSpinner,
  title: "Atoms/LoadingSpinner",
  parameters: {
    componentSubtitle: "A LoadingSpinner component.",
  },
} as ComponentMeta<typeof LoadingSpinner>;
const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);

export const BasicLoadingSpinner = Template.bind({});
