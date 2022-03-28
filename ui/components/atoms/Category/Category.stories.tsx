import React from "react";
import { Category, CategoryProps } from "./Category";

export const defaultCategory: React.FC<CategoryProps> = ({
  name = "Category Name",
  ...args
}) => <Category {...{ ...args, name }} />;

export default {
  component: Category,
  title: "Atoms/Category",
  parameters: {
    componentSubtitle: "A category component.",
  },
  argTypes: {
    name: {
      control: {
        type: "text",
        placeholder: "Category name",
      },
    },
    onClick: {
      control: {
        type: "function",
        placeholder: "onClick",
      },
    },
  },
};
