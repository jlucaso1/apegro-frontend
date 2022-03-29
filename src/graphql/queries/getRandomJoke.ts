import { gql } from "@apollo/client";

export const QueryGetRandomJoke = gql`
  query GetRandomJoke($category: String) {
    randomJoke(category: $category) {
      id
      value
      url
      categories
    }
  }
`;
