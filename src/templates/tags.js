import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticlePreview from '../components/article-preview/article-preview'

// Components
import { Link, graphql } from 'gatsby'

const Tags = ({ pageContext, data, location }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = data
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} note${totalCount === 1 ? '' : 's'} trouvée${
    totalCount === 1 ? '' : 's'
  }`

  return (
    <Layout location={location} title={title}>
      <SEO title={tag.replace(/^\w/, c => c.toUpperCase())} />
      <h2>{tag.replace(/^\w/, c => c.toUpperCase())}</h2>
      <p>{tagHeader}</p>
      {edges.map(({ node }) => {
        return <ArticlePreview key={node.fields.slug} node={node} />
      })}

      <Link to="/tags">Voir toutes les catégories</Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
