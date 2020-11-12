import React from 'react'

import { Container } from '@material-ui/core'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ location, title, children, currentActivePage }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {

  // } else {

  // }
  // console.log(location)
  return (
    <Container maxWidth="lg">
      <Header currentActivePage={currentActivePage} />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
