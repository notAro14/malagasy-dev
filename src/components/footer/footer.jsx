import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './footer.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query TwitterAcount {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  const twitterAccount = data.site.siteMetadata.social.twitter
  return (
    <div className="footer">
      <div>
        © {new Date().getFullYear()}. Fait avec le{' '}
        <span role="img" aria-label="coeur">
          &#128150;
        </span>{' '}
        par{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.twitter.com/${twitterAccount}`}
        >
          @notarodev
        </a>
      </div>
    </div>
  )
}

export default Footer
