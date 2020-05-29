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
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div>
          © {new Date().getFullYear()}. Fait avec{" "}
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
        </div>
        <div>
          <Link href="https://icons8.com/icon/63777/github">Github</Link>|
          <Link href="https://icons8.com/icon/13930/linkedin">Linkedin</Link>|
          <Link href="https://icons8.com/icon/13963/twitter">Twitter</Link>|
          <Link href="https://icons8.com/icon/13841/rss">Medium</Link> and{" "}
          <Link href="https://icons8.com/icon/35858/medium-monogram">RSS</Link>{" "}
          icons by Icon8
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
