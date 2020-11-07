import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography'
import SEO from '../components/seo'

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
  <Layout currentActivePage="/tags" location={location} title={title}>
    <SEO title="Tags" />
    <div>
      <Typography variant="h5" component="h3" color="secondary">
        Liste des tags
      </Typography>
      <Typography variant="body2" component="p" color="textPrimary">
        Les articles regroupés par thème (tag).
      </Typography>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue} ({tag.totalCount})
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
