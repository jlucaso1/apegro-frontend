import { gql } from "@apollo/client";

export const QuerySearchJokes = gql`
  query SearchJokes($query: String!) {
    searchJokes(query: $query) {
      value
      id
    }
  }
`;
