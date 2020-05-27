import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { Link } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
    margin-top: 1rem;
  }
`
const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
`
const NavLinkContainer = styled.li`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: ${props =>
    props.activePage ? "rgba(250, 250, 0, 0.3)" : "inherit"};

  transition: all ease 400ms;
  &:hover {
    background-color: rgba(250, 250, 0, 0.3);
  }
`
const NavLink = ({ children, to, activePage, component }) => {
  return (
    <Link component={component} underline="none" color="inherit" to={to}>
      <NavLinkContainer activePage={activePage}>
        <Typography component="h4">{children}</Typography>
      </NavLinkContainer>
    </Link>
  )
}

export default function Header({ currentActivePage }) {
  // const { pathname } = location

  let articles = false
  let about = false
  let contact = false

  switch (currentActivePage) {
    case "/articles":
      articles = true
      break
    case "/about":
      about = true
      break
    case "/contact":
      contact = true
      break
    default:
      articles = false
      about = false
      contact = false
      break
  }
  return (
    <Navbar>
      <Typography variant="h4" component="h1">
        <Link color="secondary" component={GatsbyLink} to="/" underline="none">
          <Box fontWeight={700}>Malagasy Dev</Box>
        </Link>
      </Typography>
      <Links>
        <NavLink activePage={articles} component={GatsbyLink} to="/articles">
          Articles
        </NavLink>
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
