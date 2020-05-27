// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"
import Button from "@material-ui/core/Button"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/article-preview"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Button variant="outlined" color="secondary">
        OUTLINED BUTTON SECONDARY
      </Button>
      <Bio />
      {posts.map(({ node }) => {
        return <ArticlePreview key={node.fields.slug} node={node} />
      })}
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
