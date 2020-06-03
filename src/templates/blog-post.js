import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "@material-ui/core/Link"
import { DiscussionEmbed } from "disqus-react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Credits from "../components/credits/credits"
import Newsletter from "../components/newsletter/newsletter"

import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const featuredImgFluid = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.fluid
    : null
  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.fields.slug, title: post.frontmatter.title },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang="fr"
        image={image}
        pathname={location.pathname}
      />
      <article>
        {featuredImgFluid ? <Img fluid={featuredImgFluid} /> : null}
        {post.frontmatter.creditsUserUrl ? (
          <Credits
            userUrl={post.frontmatter.creditsUserUrl}
            userName={post.frontmatter.creditsUser}
            platform={post.frontmatter.creditsPlatform}
            platformUrl={post.frontmatter.creditsPlatformUrl}
          />
        ) : null}
        <header style={{ margin: "1.5rem 0 1.5rem 0" }}>
          <Typography color="secondary" component="h2" variant="h4">
            {post.frontmatter.title}
          </Typography>
          <Box fontWeight={500}>
            <Typography color="textSecondary" component="p" variant="subtitle2">
              {`${new Date(post.frontmatter.date).toLocaleDateString(
                "fr-FR"
              )} • Temps de lecture : ${post.timeToRead} min `}{" "}
              &#x1F453;
            </Typography>
          </Box>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer
          style={{
            height: "800px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Newsletter />
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link component={GatsbyLink} to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link component={GatsbyLink} to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        creditsUserUrl
        creditsUser
        creditsPlatform
        creditsPlatformUrl
      }
    }
  }
`
