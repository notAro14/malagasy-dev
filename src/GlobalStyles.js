import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: ${props => props.theme.color.bgColor};
  color: ${props => props.theme.color.textPrimary};
  font-family: ${props => props.theme.font.main}, sans-serif;
  font-weight: 400;
}
ul {
  list-style-type: none
}
`

export default GlobalStyles
