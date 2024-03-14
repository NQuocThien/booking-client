import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI_SERVERSIDE;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
