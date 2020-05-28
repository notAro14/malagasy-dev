import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#F0F6EE",
      secondary: "#C1A792",
    },
    type: "dark",
    primary: {
      main: "#DA7649",
    },
    secondary: {
      main: "#ffd479",
    },
  },
  typography: {
    fontFamily: ["Open-sans", "sans-serif"].join(","),
    fontSize: 16,
  },
})
export default theme
