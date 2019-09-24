import React, { useState } from "react"
import { Link } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function SecondPage() {
  return (
    <Layout>
      <SEO title="Page three" />
      <h1>Hi from the third page</h1>
      <p>Welcome to page 2</p>
      <PrismaDbMutation />
      <Link to="/">Go back to the homepage</Link>
      <br />
      <Link to="/page-2">Go back to page 2</Link>
    </Layout>
  )
}

const CREATE_MESSAGE_MUTATION = gql`
  mutation CREATE_MESSAGE_MUTATION($text: String!) {
    createMessage(text: $text) {
      id
      text
    }
  }
`

function PrismaDbMutation() {
  const [text, setText] = useState("")
  const [createMessage, { loading, error }] = useMutation(
    CREATE_MESSAGE_MUTATION,
    {
      variables: {
        text,
      },
      refetchQueries: ["MESSAGES_QUERY"],
    }
  )

  return (
    <fieldset disabled={loading}>
      {error && `${error.message}`}
      <form
        onSubmit={async e => {
          e.preventDefault()
          const res = await createMessage()
          console.log(res)
          setText("")
        }}
      >
        <input
          placeholder="Send a message"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  )
}
