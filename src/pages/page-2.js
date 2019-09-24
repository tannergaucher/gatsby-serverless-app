import React from "react"
import { Link } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <PrismaDbQuery />
      <Link to="/">Go back to the homepage</Link>
      <br />
      <Link to="/page-3">Send a db mutation on page 3</Link>
    </Layout>
  )
}

const MESSAGES_QUERY = gql`
  query MESSAGES_QUERY {
    messages {
      text
      id
    }
  }
`

function PrismaDbQuery() {
  const { loading, error, data } = useQuery(MESSAGES_QUERY)

  return (
    <>
      <h3>Messages from prisma db</h3>
      {loading && `Loading messages from prisma db...`}
      {error && `${error.message}`}
      {data &&
        data.messages &&
        data.messages.map(message => (
          <div key={message.id}>
            <p>{message.text}</p>
          </div>
        ))}
    </>
  )
}
