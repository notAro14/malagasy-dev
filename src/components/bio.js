/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import RssFeedIcon from "@material-ui/icons/RssFeed"

const BioContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  margin-bottom: 1rem;
  background: #424242;
  border-radius: 10px;
`
// const BioText = styled.div`
//   padding: 0.5rem;
//   margin-left: 0.5rem;
//   display: flex;
//   flex-direction: column;
// `
const Socials = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
  width: 70%;
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
      <Typography
        style={{ textAlign: "center" }}
        color="textSecondary"
        variant="subtitle2"
        component="p"
      >
        Tongasoa, bienvenue sur mon blog. {author.summary}
      </Typography>
      <Socials>
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
        <Link component={GatsbyLink} color="secondary" to="/rss.xml">
          <RssFeedIcon titleAccess="RSS feed" />
        </Link>
      </Socials>
    </BioContainer>
  )
}

export default Bio
