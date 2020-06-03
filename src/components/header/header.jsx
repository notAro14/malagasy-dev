import React from "react"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { Link } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

import { NavLinkContainer, Navbar, Links } from "./header.styles"

const NavLink = ({ children, to, activePage, component }) => {
  return (
    <Link component={component} underline="none" to={to}>
      <NavLinkContainer activePage={activePage}>
        <Typography color="textPrimary" variant="subtitle1" component="h4">
          {children}
        </Typography>
      </NavLinkContainer>
    </Link>
  )
}

export default function Header({ currentActivePage }) {
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/logo_transparent.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logo = data.logo.childImageSharp.fixed
  let about = false
  let contact = false

  switch (currentActivePage) {
    case "/about":
      about = true
      break
    case "/contact":
      contact = true
      break
    default:
      about = false
      contact = false
      break
  }
  return (
    <Navbar>
      <Typography color="primary" variant="h5" component="h1">
        <Link
          style={{ display: "flex", alignItems: "center" }}
          component={GatsbyLink}
          to="/"
          underline="none"
        >
          <Image fixed={logo} alt="Malagasy Dev" />
          <span style={{ marginLeft: "1rem" }}>MalagasyDev</span>
          {/* <Box fontWeight={700}>MalagasyDev</Box> */}
        </Link>
      </Typography>
      <Links>
        <NavLink activePage={about} component={GatsbyLink} to="/about">
          A propos
        </NavLink>
        <NavLink activePage={contact} component={GatsbyLink} to="/contact">
          Contact
        </NavLink>
      </Links>
    </Navbar>
  )
}
