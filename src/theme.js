import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#F0F6EE",
      secondary: "#C1A792",
    },
    type: "dark",
    primary: {
      main: "#F38560",
    },
    secondary: {
      main: "#F1EA65",
    },
  },
  typography: {
    fontSize: 16.5,
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
  },
})
export default theme
