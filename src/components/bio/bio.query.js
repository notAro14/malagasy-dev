import { useStaticQuery, graphql } from 'gatsby'

const useBioQuery = () =>
  useStaticQuery(graphql`
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

export default useBioQuery
