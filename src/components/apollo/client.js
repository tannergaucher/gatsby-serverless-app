import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: process.env.GATSBY_SITE_URL,
})
