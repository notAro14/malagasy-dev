import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
      <header>
        <Typography variant="h6" component="h3">
          <Link
            color="secondary"
            component={GatsbyLink}
            to={node.fields.slug}
            underline="none"
          >
            <Box fontWeight={700}>{title}</Box>
          </Link>
        </Typography>

        <Typography color="textSecondary" component="p" variant="caption">
          {`${new Date(node.frontmatter.date).toLocaleDateString("fr-FR")} • ${
            node.timeToRead
          } min `}
          &#x1F453;
        </Typography>
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
