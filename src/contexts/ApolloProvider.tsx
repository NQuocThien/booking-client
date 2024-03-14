import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolo-client";

interface AppProviderProps {
  children: React.ReactNode;
}
const ApolloClientProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
