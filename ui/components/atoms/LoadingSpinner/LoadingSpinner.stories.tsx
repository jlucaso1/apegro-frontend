import React from "react";
import { LoadingSpinner, LoadingSpinnerProps } from "./LoadingSpinner";

export const defaultSpinner: React.FC<LoadingSpinnerProps> = ({ ...props }) => (
  <LoadingSpinner {...props} />
);

export default {
  component: LoadingSpinner,
  title: "Atoms/LoadingSpinner",
  parameters: {
    componentSubtitle: "A loading spinner component.",
  },
  argTypes: {},
};
