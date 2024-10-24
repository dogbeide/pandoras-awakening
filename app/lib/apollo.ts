import { ApolloClient, InMemoryCache } from "@apollo/client";
import { DefaultOptions } from "@apollo/client";
import { QueryInfo } from "@apollo/client/core/QueryInfo";
import { relayStylePagination } from "@apollo/client/utilities";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination(),
        },
      },
    },
  }),
  defaultOptions: defaultOptions,
})