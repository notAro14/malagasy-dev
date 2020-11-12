import React from 'react'
import { Link } from 'gatsby'

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
      <header>
        <h2>{title}</h2>

        <span className="caption">
          {`${new Date(node.frontmatter.date).toLocaleDateString('fr-FR')} • ${
            node.timeToRead
          } min `}
          &#x1F453;
        </span>
      </header>
      <section>
        <p
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
