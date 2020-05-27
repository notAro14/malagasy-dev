import React from "react"
import { Link as GatsbyLink } from "gatsby"
import Link from "@material-ui/core/Link"
import { Container } from "@material-ui/core"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
          }}
          to={`/`}
          component={GatsbyLink}
          underline="none"
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
          }}
          to={`/`}
          component={GatsbyLink}
          underline="none"
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Container maxWidth="sm">
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>
      </footer>
    </Container>
  )
}

export default Layout
