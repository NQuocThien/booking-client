"use client";
import { createContext, useContext, useEffect, useState } from "react";
import ApolloClientProvider from "./ApolloProvider";

interface AuthContextType {}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
function useMainContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an MainContextProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}
function MainContextProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{}}>
      <ApolloClientProvider>{children}</ApolloClientProvider>
    </AuthContext.Provider>
  );
}

export { useMainContext, MainContextProvider };
