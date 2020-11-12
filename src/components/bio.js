import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import './bio.scss'

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
          }
        }
      }
    }
  `)

  const {
    social: { twitter, github, linkedin },
  } = data.site.siteMetadata
  return (
    <div className="bio">
      <div className="content">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Zombie Nietzschee"
          title="Zombie Nietzsche"
        />
        <span className="text">Suis-moi sur les réseaux</span>
      </div>

      <ul className="socials">
        <li className="social">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={`https://github.com/${github}`}
          >
            <Image
              fixed={data.github.childImageSharp.fixed}
              title="Github"
              alt="Github"
            />
          </Link>
        </li>
        <li className="social">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={`https://www.linkedin.com/in/${linkedin}/`}
          >
            <Image
              fixed={data.linkedin.childImageSharp.fixed}
              title="LinkedIn"
              alt="LinkedIn"
            />
          </Link>
        </li>
        <li className="social">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={`https://twitter.com/${twitter}`}
          >
            <Image
              fixed={data.twitter.childImageSharp.fixed}
              title="Twitter"
              alt="Twitter"
            />
          </Link>
        </li>
        <li className="social">
          <Link to="/rss.xml">
            <Image
              fixed={data.rss.childImageSharp.fixed}
              title="RSS"
              alt="RSS"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Bio
