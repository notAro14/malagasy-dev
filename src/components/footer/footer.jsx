import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FooterContainer, ExternalLink } from './footer.styles'

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
    <FooterContainer>
      © {new Date().getFullYear()}. Fait avec le{' '}
      <span role="img" aria-label="coeur">
        &#128150;
      </span>{' '}
      par{' '}
      <ExternalLink
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.twitter.com/${twitterAccount}`}
      >
        @notarodev
      </ExternalLink>
    </FooterContainer>
  )
}

export default Footer
