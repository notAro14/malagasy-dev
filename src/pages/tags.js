import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import './tags.scss'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <SEO title="Tags" />
    <div className="tag-page">
      <h2>Toutes les catégories</h2>
      <ul className="tags-list">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
