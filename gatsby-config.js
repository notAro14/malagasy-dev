module.exports = {
  siteMetadata: {
    title: `Malagasy Dev`,
    author: {
      name: `Aro Andriamaro`,
      summary: `Je parle de code, de la tech, et d'autres choses`,
    },
    description: `Un blog sur le dev et la tech.`,
    siteUrl: `https://malagasydev.com`,
    social: {
      twitter: `notarodev`,
      github: `notAro14`,
      linkedin: `mamitiana`,
      medium: `@notAro14`,
      devTo: `notaro14`,
    },
    keywords: [
      'madagascar',
      'javascript',
      'productivité',
      'entrepreneuriat',
      'html',
      'css',
      'react',
      'gatsby',
      'technologies',
      'société',
      'design',
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
              maxWidth: 800,
              linkImagesToOriginal: false,
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
    // STYLING
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malagasy Dev blog`,
        short_name: `MalagasyDev`,
        start_url: `/`,
        background_color: `#003049`,
        theme_color: `#fc6471`,
        display: `minimal-ui`,
        icon: `content/assets/logo_transparent.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
