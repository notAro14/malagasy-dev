import React from 'react'
import { Link } from 'gatsby'
import './article-preview.scss'
import DateAndRead from '../dateAndRead/dateAndRead'

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const { date } = node.frontmatter
  const { timeToRead } = node
  return (
    <article className="article-preview" key={node.fields.slug}>
      <header className="header">
        <h2 className="title">{title}</h2>
        <DateAndRead date={date} timeToRead={timeToRead} />
      </header>
      <section className="excerpt">
        <p
          className="text"
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
        <Link to={node.fields.slug}>Lire l'article →</Link>
      </section>
    </article>
  )
}

export default ArticlePreview
