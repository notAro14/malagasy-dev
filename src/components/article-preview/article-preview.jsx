import React from 'react'
import { Link } from 'gatsby'
import styles from './article-preview.module.scss'

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const { growth } = node.frontmatter
  return (
    <article className={styles.article}>
      <span role="img" aria-label="plant growth">
        {growth}
      </span>{' '}
      <Link to={node.fields.slug}>{title}</Link>
    </article>
  )
}

export default ArticlePreview
