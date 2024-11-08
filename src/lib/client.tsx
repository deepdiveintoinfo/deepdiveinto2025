import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://www.dre.cx/api/graphql',
    cache: new InMemoryCache(),
});
