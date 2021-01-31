import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Articles from '../components/articles/articles'
import Title from '../components/title/title'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Title>Toutes les notes par ordre chronologique</Title>
      <Articles articles={allPosts} />
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            tags
            date
            title
            description
            growth
          }
        }
      }
    }
  }
`
