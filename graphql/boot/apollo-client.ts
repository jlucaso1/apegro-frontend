import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  process.env.API_URL || "http://localhost:3000/graphql"
);

export default client;
