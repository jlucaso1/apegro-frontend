import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "./HomePage";

export default {
  component: HomePage,
  title: "Pages/HomePage",
  parameters: {
    componentSubtitle: "A HomePage component.",
  },
} as ComponentMeta<typeof HomePage>;
const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const BasicHomePage = Template.bind({});
BasicHomePage.args = {
  categories: ["movie", "tv", "music", "book", "celebrity"],
}
