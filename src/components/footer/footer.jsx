import React from "react"
import Link from "@material-ui/core/Link"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
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
    author: { name },
    social: { github, twitter, linkedin },
  } = data.site.siteMetadata
  return (
    <FooterContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "70%",
          flexDirection: "column",
        }}
      >
        <div>
          © {new Date().getFullYear()} {name}.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Link href={github}>Github</Link>
          <Link href={linkedin}>Linkedin</Link>
          <Link href={twitter}>Twitter</Link>
          <Link component={GatsbyLink} to="/rss.xml">
            RSS
          </Link>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
