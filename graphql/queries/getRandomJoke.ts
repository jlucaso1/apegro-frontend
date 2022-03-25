import { gql } from "@apollo/client";

export const QueryGetRandomJoke = gql`
  query GetRandomJoke {
    randomJoke {
      id
      value
      url
      categories
    }
  }
`;
