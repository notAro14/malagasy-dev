import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  a {
    /* text-decoration: none; */
    color: #6ad0f3;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* color: #60CEF3; */
    color: #F3CF60;
    /* color: #60F385; */
  }
  i {
    font-size: 32px;
  }
  blockquote {
    background-color: rgba(243, 207, 96,0.5);
    border: none;
    border-radius: 5px;
    p {
      padding: 1rem;
      font-size: 0.9rem;
    }
  }
`
export default GlobalStyles
