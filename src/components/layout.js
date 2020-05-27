import React from "react"
import Link from "@material-ui/core/Link"
import { Container } from "@material-ui/core"
import Header from "./header"

const Layout = ({ location, title, children, currentActivePage }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {

  // } else {

  // }
  // console.log(location)
  return (
    <Container maxWidth="sm">
      <Header currentActivePage={currentActivePage} />
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
