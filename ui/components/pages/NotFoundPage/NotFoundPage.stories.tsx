import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";

export default {
  component: NotFoundPage,
  title: "Pages/NotFoundPage",
  parameters: {
    componentSubtitle: "A Header component.",
  },
} as ComponentMeta<typeof NotFoundPage>;
const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const BasicNotFoundPage = Template.bind({});
