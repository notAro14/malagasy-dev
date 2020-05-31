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
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
      github: file(absolutePath: { regex: "/icons8-github-48.png/" }) {
        childImageSharp {
          fixed(width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(absolutePath: { regex: "/icons8-linkedin-48.png/" }) {
        childImageSharp {
          fixed(width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(absolutePath: { regex: "/icons8-twitter-48.png/" }) {
        childImageSharp {
          fixed(width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(absolutePath: { regex: "/icons8-medium-monogram-48.png/" }) {
        childImageSharp {
          fixed(width: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rss: file(absolutePath: { regex: "/icons8-rss-48.png/" }) {
        childImageSharp {
          fixed(width: 35) {
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
            medium
          }
        }
      }
    }
  `)

  const {
    author,
    social: { twitter, github, linkedin, medium },
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
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${github}`}
        >
          <Image fixed={data.github.childImageSharp.fixed} alt="github icon" />
        </OutboundLink>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.linkedin.com/in/${linkedin}/`}
        >
          <Image
            fixed={data.linkedin.childImageSharp.fixed}
            alt="linkedin icon"
          />
        </OutboundLink>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/${twitter}`}
        >
          <Image
            fixed={data.twitter.childImageSharp.fixed}
            alt="twitter icon"
          />
        </OutboundLink>
        <OutboundLink
          target="_blank"
          rel="noopener noreferrer"
          href={`https://medium.com/${medium}`}
        >
          <Image fixed={data.medium.childImageSharp.fixed} alt="medium icon" />
        </OutboundLink>
        <Link component={GatsbyLink} color="secondary" to="/rss.xml">
          <Image fixed={data.rss.childImageSharp.fixed} alt="rss feed icon" />
        </Link>
      </Socials>
      <Typography variant="subtitle2" component="p">
        Icons by{" "}
        <Link
          href="https://icons8.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icon8
        </Link>
      </Typography>
      {/* <Socials>
        <Link
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${github}`}
        >
          <Image fixed={data.github.childImageSharp.fixed} alt="github icon" />
        </Link>
        <Link
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.linkedin.com/in/${linkedin}/`}
        >
          <Image
            fixed={data.linkedin.childImageSharp.fixed}
            alt="linkedin icon"
          />
        </Link>
        <Link
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/${twitter}`}
        >
          <Image
            fixed={data.twitter.childImageSharp.fixed}
            alt="twitter icon"
          />
        </Link>
        <Link
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://medium.com/${medium}`}
        >
          <Image fixed={data.medium.childImageSharp.fixed} alt="medium icon" />
        </Link>
        <Link component={GatsbyLink} color="secondary" to="/rss.xml">
          <Image fixed={data.rss.childImageSharp.fixed} alt="rss feed icon" />
        </Link>
      </Socials> */}
    </BioContainer>
  )
}

export default Bio
