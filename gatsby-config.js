module.exports = {
  siteMetadata: {
    title: `Malagasy Dev`,
    author: {
      name: `Mamitiana Andriamaro`,
      summary: `Ici je te parle de dev mais aussi de plein d'autres choses.`,
    },
    description: `Un blog sur le développement web et la tech mais pas que.`,
    siteUrl: `https://malagasydev.netlify.app`,
    social: {
      twitter: `notarodev`,
      github: `notAro14`,
      linkedin: `mamitiana`,
      medium: `@notAro14`,
    },
    keywords: [
      "développement",
      "web",
      "front-end",
      "malagasy",
      "malgache",
      "madagascar",
      "react js",
      "javascript",
      "html",
      "css",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168065651-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malagasy Dev blog`,
        short_name: `MalagasyDev`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#F1EA65`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
