import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RandomJoke } from "./RandomJoke";

export default {
  component: RandomJoke,
  title: "Organisms/RandomJoke",
  parameters: {
    componentSubtitle: "A RandomJoke component.",
  },
} as ComponentMeta<typeof RandomJoke>;
const Template: ComponentStory<typeof RandomJoke> = (args) => (
  <RandomJoke {...args} />
);

export const BasicRandomJoke = Template.bind({});
