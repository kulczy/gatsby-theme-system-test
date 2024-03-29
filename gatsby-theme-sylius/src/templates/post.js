import React from "react"
import { graphql } from "gatsby"
import Layout from './layout';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <header className="header">
        <h1 className="">{post.frontmatter.title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`