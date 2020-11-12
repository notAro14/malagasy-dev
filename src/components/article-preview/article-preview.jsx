import React from 'react'
import { Link } from 'gatsby'
import './article-preview.scss'

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className="article-preview" key={node.fields.slug}>
      <header className="header">
        <h2 className="title">{title}</h2>
        <span className="date">
          {`${new Date(node.frontmatter.date).toLocaleDateString('fr-FR')} • ${
            node.timeToRead
          } min `}
          &#x1F453;
        </span>
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
