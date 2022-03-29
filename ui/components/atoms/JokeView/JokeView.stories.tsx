import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { JokeView } from "./JokeView";

export default {
  component: JokeView,
  title: "Atoms/JokeView",
  parameters: {
    componentSubtitle: "A JokeView component.",
  },
} as ComponentMeta<typeof JokeView>;
const Template: ComponentStory<typeof JokeView> = (args) => (
  <JokeView {...args} />
);

export const BasicJokeView = Template.bind({});
BasicJokeView.args = {
  text: "This is a joke.",
};
