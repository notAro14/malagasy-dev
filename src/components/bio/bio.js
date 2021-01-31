import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import useBioQuery from './bio.query'
import { BioContainer, BioContent, BioContentText, Socials } from './bio.styles'

const Bio = () => {
  const data = useBioQuery()

  const {
    social: { twitter, github, linkedin },
  } = data.site.siteMetadata

  const socials = [
    {
      id: github,
      href: `https://github.com/${github}`,
      logo: data.github.childImageSharp.fixed,
    },
    {
      id: linkedin,
      href: `https://www.linkedin.com/in/${linkedin}/`,
      logo: data.linkedin.childImageSharp.fixed,
    },
    {
      id: twitter,
      href: `https://twitter.com/${twitter}`,
      logo: data.twitter.childImageSharp.fixed,
    },
    {
      id: 'RSS',
      href: null,
      to: '/rss.xml',
      logo: data.rss.childImageSharp.fixed,
    },
  ]
  return (
    <BioContainer>
      <BioContent>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Zombie Nietzschee"
          title="Zombie Nietzsche"
        />
        <BioContentText>Suis-moi sur les réseaux</BioContentText>
      </BioContent>

      <Socials>
        {socials.map(({ id, href, logo, to }) => (
          <li key={id}>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Image fixed={logo} title={id} alt={id} />
              </a>
            ) : (
              <Link to={to}>
                <Image fixed={logo} title={id} alt={id} />
              </Link>
            )}
          </li>
        ))}
      </Socials>
    </BioContainer>
  )
}

export default Bio
