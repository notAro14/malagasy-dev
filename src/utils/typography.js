import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete oceanBeachTheme.googleFonts

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
