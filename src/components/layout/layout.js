import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import Header from '../header/header'
import Bio from '../bio/bio'
import Footer from '../footer/footer'

import { Container, Main } from './layout.styles'
import GlobalStyles from '../../GlobalStyles'
import theme from '../../Theme'

import Title, { ArticleTitle } from '../title/title'
import Paragraph from '../paragraph/paragraph'
import ExternalLink from '../externalLink/externalLink'
import { List, ListItem } from '../list-item/list-item'
import Callout from '../callout/callout'

const shortcodes = {
  ArticleTitle,
  Callout,
  ExternalLink,
  Paragraph,
  List,
  ListItem,
  Title,
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Bio />
        <MDXProvider components={shortcodes}>
          <Main>{children}</Main>
        </MDXProvider>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
