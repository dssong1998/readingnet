import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

export const TOKEN = "authorization";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const tokenVar = makeVar(localStorage.getItem(TOKEN));
export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};
export const logUserOut = async () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar("");
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: tokenVar(),
    },
  };
});

const onErrorLink = onError((e) => {
  console.log(e);
});

const uploadHttpLink = createUploadLink({
  uri: process.env.REACT_APP_DATABASE_URI + "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(onErrorLink).concat(uploadHttpLink),
  cache: new InMemoryCache(),
});
export default client;
