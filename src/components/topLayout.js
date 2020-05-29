import React from "react"
// import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import GlobalStyles from "./global-styles"

const TopLayout = props => {
  return (
    <>
      {/* <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </>
  )
}
export default TopLayout
