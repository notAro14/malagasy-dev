import React from 'react'

import { Container } from '@material-ui/core'
import Header from '../header/header'
import Bio from '../bio/bio'
import Footer from '../footer/footer'

const Layout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Header />
      <Bio />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
