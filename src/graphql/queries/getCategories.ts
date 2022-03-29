import { gql } from "@apollo/client";

export const QueryGetCategories = gql`
  query GetCategories {
    categories
  }
`;
