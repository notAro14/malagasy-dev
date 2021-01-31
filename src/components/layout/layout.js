import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import Header from '../header/header'
import Bio from '../bio/bio'
import Footer from '../footer/footer'

import { Container, Main } from './layout.styles'
import GlobalStyles from '../../GlobalStyles'
import theme from '../../Theme'

import Title, { Heading } from '../title/title'
import Paragraph from '../paragraph/paragraph'
import ExternalLink from '../externalLink/externalLink'
import { List, ListItem } from '../list-item/list-item'
import Callout from '../callout/callout'

const components = {
  a: ExternalLink,
  blockquote: props => <Callout icon="💡" iconLabel="bulb" {...props} />,
  h2: Heading,
  h3: props => <Heading as="h3" {...props} />,
  h4: props => <Heading as="h4" {...props} />,
  h5: props => <Heading as="h5" {...props} />,
  h6: props => <Heading as="h6" {...props} />,
  ul: List,
  li: props => <ListItem icon="📌" iconLabel="pin" {...props} />,
  p: Paragraph,
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Bio />
        <MDXProvider components={components}>
          <Main>{children}</Main>
        </MDXProvider>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
