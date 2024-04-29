import { getCookie } from "@/utils/tools";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI_SERVERSIDE;
const asscessKey = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "access_token";

const httpLink = createHttpLink({
  uri: uri,
  credentials: "include", //gửi toàn bộ cookie đi
});

const authLink = setContext((_, { headers }) => {
  const tokentest = getCookie(asscessKey);
  return {
    headers: {
      ...headers,
      authorization: tokentest ? `Bearer ${tokentest}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

export default client;
