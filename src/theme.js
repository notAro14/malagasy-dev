import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    text: {
      // primary: "#F0F6EE",
      // secondary: "#C1A792",
    },
    type: 'light',
    primary: {
      main: '#F38560',
    },
    secondary: {
      // main: "#F1EA65",
      main: '#F3CF60',
    },
  },
  typography: {
    fontSize: 16.5,
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
  },
})
export default theme
