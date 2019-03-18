import React from "react"
import { graphql } from "gatsby"
import Layout from '../templates/layout';

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello worlddd</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`