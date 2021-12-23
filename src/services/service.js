import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  from,
} from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
  credentials: "include",
});

// Cache implementation
const cache = new InMemoryCache();
const defaultClient = new ApolloClient({
  link: httpLink, // REMOVE authLink FOR HTTPONLY_TOKEN
  defaultOptions: {
    fetchPolicy: "no-cache",
  },
  cache,
  connectToDevTools: true,
});

export default defaultClient;
