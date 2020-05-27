import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as MaterialLink } from "@material-ui/core"
import styled from "styled-components"

const Link = styled(MaterialLink)`
  color: yellow;
`
const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
      <header>
        <h3>
          <Link
            style={{ boxShadow: `none` }}
            to={node.fields.slug}
            component={GatsbyLink}
          >
            {title}
          </Link>
        </h3>
        <small>
          {new Date(node.frontmatter.date).toLocaleDateString("fr-FR")}
        </small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default ArticlePreview
