import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"

const ArticlePreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const tags = node.frontmatter.tags
  return (
    <article key={node.fields.slug}>
      <header>
        <Link
          color="secondary"
          component={GatsbyLink}
          to={node.fields.slug}
          underline="none"
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Link>

        <Typography color="textSecondary" component="p" variant="caption">
          {`${new Date(node.frontmatter.date).toLocaleDateString("fr-FR")} • ${
            node.timeToRead
          } min `}
          &#x1F453;
        </Typography>
      </header>
      {tags
        ? tags.map((tag, index) => {
            return (
              <Link
                component={GatsbyLink}
                key={index}
                style={{ marginRight: "0.5rem" }}
                to={`/tags/${tag}`}
              >
                <Chip
                  size="small"
                  onClick={() => {}} // to make the cursor to pointer
                  color="primary"
                  key={index}
                  label={tag}
                />
              </Link>
            )
          })
        : null}
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
      <hr />
    </article>
  )
}

export default ArticlePreview
