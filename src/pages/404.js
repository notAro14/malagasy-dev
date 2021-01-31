import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Title from '../components/title/title'
import Paragraph from '../components/paragraph/paragraph'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Title>Oops</Title>
      <Paragraph>La page que tu recherches n'existe pas.</Paragraph>
      <Img fluid={data.file.childImageSharp.fluid} alt="not found page" />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
