import React from 'react'
import { graphql } from 'gatsby'

import DateAndRead from '../components/dateAndRead/dateAndRead'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Title from '../components/title/title'
import LinksToOtherPosts from '../components/links-to-other-posts/links-to-other-posts'
import Tags from '../components/tags/tags'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null

  const date = post.frontmatter.date
  const timeToRead = post.timeToRead

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
        <header>
          {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : null}
          <Title>
            {post.frontmatter.title}{' '}
            <span role="img" aria-label="plant growth">
              {post.frontmatter.growth}
            </span>
          </Title>
          <DateAndRead date={date} timeToRead={timeToRead} />
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <LinksToOtherPosts previous={previous} next={next} />
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
        growth
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
