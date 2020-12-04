import React from 'react'

import { Container } from '@material-ui/core'
import Header from './header/header'
import Bio from './bio'
import Footer from './footer/footer'

const Layout = ({ children, currentActivePage }) => {
  return (
    <Container maxWidth="md">
      <Header currentActivePage={currentActivePage} />
      <Bio />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
