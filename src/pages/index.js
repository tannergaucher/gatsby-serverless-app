import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <HelloFromServer />
      <Link to="/page-2/">Query the database on page 2</Link>
    </Layout>
  )
}

const HELLO_QUERY = gql`
  query HELLO_QUERY {
    hello
  }
`

function HelloFromServer() {
  const { loading, error, data } = useQuery(HELLO_QUERY)

  return (
    <>
      {loading && `Loading from server..`}
      {error && `${error.message}`}
      {data && data.hello && <p>Hello {data.hello}</p>}
    </>
  )
}
