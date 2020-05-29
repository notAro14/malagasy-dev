import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { Link } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import { NavLinkContainer, Navbar, Links } from "./header.styles"

const NavLink = ({ children, to, activePage, component }) => {
  return (
    <Link component={component} underline="none" to={to}>
      <NavLinkContainer activePage={activePage}>
        <Typography color="textPrimary" variant="subtitle1" component="h4">
          <Box fontWeight={700}>{children}</Box>
        </Typography>
      </NavLinkContainer>
    </Link>
  )
}

export default function Header({ currentActivePage }) {
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
        <Link component={GatsbyLink} to="/" underline="none">
          <Box fontWeight={700}>MalagasyDev</Box>
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
