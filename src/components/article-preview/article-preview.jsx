import React from 'react'

import { Article, Link } from './article-preview.styles'

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const { growth } = node.frontmatter
  return (
    <Article>
      <span role="img" aria-label="plant growth">
        {growth}
      </span>
      <Link to={node.fields.slug}>{title}</Link>
    </Article>
  )
}

export default ArticlePreview
