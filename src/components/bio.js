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
import { Box, Link } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

const BioContainer = styled(Paper)`
  padding: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
const BioText = styled.div`
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
`
const SocialsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
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
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  const {
    author,
    social: { twitter, github, linkedin },
  } = data.site.siteMetadata
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
        <Typography color="textSecondary" variant="subtitle2" component="p">
          <Box textAlign="center">
            Tongasoa, bienvenue sur mon blog. {author.summary}
          </Box>
        </Typography>
        <SocialsContainer>
          <Link
            color="secondary"
            target="_blank"
            rel="noopener noreferrer"
            href={github}
          >
            <GitHubIcon titleAccess="Github" />
          </Link>
          <Link
            color="secondary"
            target="_blank"
            rel="noopener noreferrer"
            href={linkedin}
          >
            <LinkedInIcon titleAccess="Linkedin" />
          </Link>
          <Link
            color="secondary"
            target="_blank"
            rel="noopener noreferrer"
            href={twitter}
          >
            <TwitterIcon titleAccess="Twitter" />
          </Link>
        </SocialsContainer>
      </BioText>
    </BioContainer>
  )
}

export default Bio
