const { ApolloServer, gql } = require("apollo-server-lambda")
const { prisma } = require("./generated/prisma-client")

const typeDefs = gql`
  type Query {
    hello: String!
    messages: [Message!]
  }

  type Mutation {
    createMessage(text: String!): Message!
  }

  type Message {
    id: ID!
    text: String!
  }
`

const resolvers = {
  Query: {
    hello: () => "world",
    messages: () => prisma.messages(),
  },

  Mutation: {
    createMessage: async (parent, { text }, context) => {
      const message = await prisma.createMessage({
        text,
      })

      return message
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
