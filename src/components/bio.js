import React from 'react'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const BioContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  max-width: 65%;
  background: #eee;
  border-radius: 5px;
`
const BioContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 60%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`

const Socials = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`

const Bio = ({ isHomePage }) => {
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
            devTo
          }
        }
      }
    }
  `)

  const {
    author,
    social: { twitter, github, linkedin, devTo },
  } = data.site.siteMetadata
  return (
    <BioContainer>
      <BioContent>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginBottom: 0,
            minWidth: 75,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imgStyle={
            {
              // borderRadius: `50%`,
            }
          }
        />
        {isHomePage ? (
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            component="p"
          >
            {author.summary}
          </Typography>
        ) : (
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            component="p"
          >
            Suis-moi sur les réseaux
          </Typography>
        )}
      </BioContent>

      <Socials>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${github}`}
        >
          <Image fixed={data.github.childImageSharp.fixed} alt="Github" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://dev.to/${devTo}`}
        >
          <img
            style={{ background: '#DDD' }}
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="DevTo"
            height="30"
            width="30"
          />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.linkedin.com/in/${linkedin}/`}
        >
          <Image fixed={data.linkedin.childImageSharp.fixed} alt="LinkedIn" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/${twitter}`}
        >
          <Image fixed={data.twitter.childImageSharp.fixed} alt="Twitter" />
        </Link>
        <Link component={GatsbyLink} color="secondary" to="/rss.xml">
          <Image fixed={data.rss.childImageSharp.fixed} alt="RSS" />
        </Link>
      </Socials>
    </BioContainer>
  )
}

export default Bio
