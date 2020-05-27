/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

const BioContainer = styled(Paper)`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
const BioText = styled.div`
  text-align: center;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <BioContainer>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <BioText>
        <Typography variant="subtitle1" component="p">
          Tongasoa, bienvenue sur mon blog. {author.summary}
        </Typography>
      </BioText>
    </BioContainer>
  )
}

export default Bio
