import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Credits from '../components/credits/credits'
import './blog-post.scss'

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
      <Bio />
      <article className="post">
        {featuredImgFluid ? <Img fluid={featuredImgFluid} /> : null}
        {post.frontmatter.creditsUserUrl ? (
          <Credits
            userUrl={post.frontmatter.creditsUserUrl}
            userName={post.frontmatter.creditsUser}
          />
        ) : null}
        <header className="post-header">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <span className="post-date">
            {`${new Date(post.frontmatter.date).toLocaleDateString(
              'fr-FR'
            )} • Temps de lecture : ${post.timeToRead} min `}{' '}
            &#x1F453;
          </span>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <div className="tags">
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
      <nav>
        <ul className="links-to-other-posts">
          <li>
            {previous && (
              <Link
                className="link-to-other-posts"
                to={previous.fields.slug}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                className="link-to-other-posts"
                to={next.fields.slug}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Bio />
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
