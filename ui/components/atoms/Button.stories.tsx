import React from "react";

import Button, { ButtonProps } from "./Button";

export const basicButton: React.FC<ButtonProps> = ({
  children = "Basic Button",
  ...args
}) => <Button {...args}>{children}</Button>;

export default {
  component: Button,
  title: "Atoms|Button",
  parameters: {
    componentSubtitle: "A button component.",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
        placeholder: "Button text",
      },
    },
    onClick: {
      control: {
        type: "function",
        placeholder: "onClick",
      },
    },
    disabled: {
      control: {
        type: "boolean",
        placeholder: "disabled",
      },
    },
  },
};
