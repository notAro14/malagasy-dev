import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Credits from '../components/credits/credits'
import Newsletter from '../components/newsletter/newsletter'
import Box from '@material-ui/core/Box'

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

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang="fr"
        image={image}
        pathname={location.pathname}
      />
      <article className="post">
        {featuredImgFluid ? <Img fluid={featuredImgFluid} /> : null}
        {post.frontmatter.creditsUserUrl ? (
          <Credits
            userUrl={post.frontmatter.creditsUserUrl}
            userName={post.frontmatter.creditsUser}
          />
        ) : null}
        <header style={{ margin: '1.5rem 0 1.5rem 0' }}>
          <h1>{post.frontmatter.title}</h1>

          <Box fontWeight={500}>
            <span className="caption">
              {`${new Date(post.frontmatter.date).toLocaleDateString(
                'fr-FR'
              )} • Temps de lecture : ${post.timeToRead} min `}{' '}
              &#x1F453;
            </span>
          </Box>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <div style={{ marginBottom: '0.25rem' }}>
        Tags :
        {post.frontmatter.tags
          ? post.frontmatter.tags.map((tag, index) => {
              let separator = ','
              if (index === 0) separator = ''

              return (
                <Link className="tag" key={tag} to={`/tags/${tag}`}>
                  {separator + ' ' + tag}
                </Link>
              )
            })
          : null}
      </div>
      <footer
        style={{
          height: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Bio />
        <Newsletter />
      </footer>

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
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
        tags
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
      }
    }
  }
`
