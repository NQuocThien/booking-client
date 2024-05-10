import { getCookie } from "@/utils/tools";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI_SERVERSIDE;
const wsUrl = "ws://localhost:4000/graphql";
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
const wsLink = new WebSocketLink({
  uri: wsUrl,
  options: {
    reconnect: true,
  },
});

const link = split(
  // Chia các hoạt động dựa trên loại
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  // Sử dụng WebSocket link cho subscription
  wsLink,
  // Sử dụng HTTP link cho query và mutation
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
