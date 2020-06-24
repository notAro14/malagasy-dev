// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/article-preview/article-preview"
import Newsletter from "../components/newsletter/newsletter"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tous les articles" />
      <Bio isHomePage />
      <hr />
      {posts.map(({ node }) => {
        return <ArticlePreview key={node.fields.slug} node={node} />
      })}
      <br />
      <Newsletter />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`
