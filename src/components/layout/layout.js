import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../header/header'
import Bio from '../bio/bio'
import Footer from '../footer/footer'

import { Container, Main } from './layout.styles'
import GlobalStyles from '../../GlobalStyles'
import theme from '../../Theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Bio />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
