import React from "react";
import { Category, CategoryProps } from "./Category";

export const defaultCategory: React.FC<CategoryProps> = ({
  name = "movie",
  ...props
}) => <Category name={name} {...props} />;

export default {
  component: Category,
  title: "Atoms/Category",
  parameters: {
    componentSubtitle: "A category component.",
  },
  argTypes: {},
};
