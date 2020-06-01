import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"
import Link from "@material-ui/core/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Oops</h1>
      <p>
        La page que tu recherches n'existe pas. Tu peux retrouver la liste de
        tous les articles{" "}
        <Link component={GatsbyLink} to="/" color="primary">
          ici.
        </Link>
      </p>
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
