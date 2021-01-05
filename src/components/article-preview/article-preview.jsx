import React from 'react'
import { Link } from 'gatsby'
import './article-preview.scss'

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const { growth } = node.frontmatter
  return (
    <article className="article-preview" key={node.fields.slug}>
      <header className="header">
        <Link to={node.fields.slug}>
          <h3 className="title">
            <span role="img" aria-label="plant growth">
              {growth}
            </span>{' '}
            {title}
          </h3>
        </Link>
      </header>
    </article>
  )
}

export default ArticlePreview
