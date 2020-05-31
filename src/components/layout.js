import React from "react"

import { Container } from "@material-ui/core"
import Header from "./header/header"
import Footer from "./footer/footer"

// import ThemeProvider from "@material-ui/styles/ThemeProvider"
// import theme from "../theme"

// import GlobalStyles from "./global-styles"
// import CssBaseline from "@material-ui/core/CssBaseline"

const Layout = ({ location, title, children, currentActivePage }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {

  // } else {

  // }
  // console.log(location)
  return (
    <Container maxWidth="sm">
      {/* <ThemeProvider theme={theme}> */}
      {/* <GlobalStyles /> */}
      {/* <CssBaseline /> */}
      <Header currentActivePage={currentActivePage} />
      <main>{children}</main>
      <Footer />
      {/* </ThemeProvider> */}
    </Container>
  )
}

export default Layout
