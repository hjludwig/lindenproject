module.exports = {
  siteMetadata: {
    title: `The Linden Project`,
    description: `Rediscover the art of song`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9ba837`,
        theme_color: `#9ba837`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vlx0xi6k",
        dataset: "production",

        token: process.env.MY_SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://lindenproject.us19.list-manage.com/subscribe/post?u=769cf30660ee6749d5c74acde&amp;id=008d70c051",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Linden Project`,
        short_name: `Linden Project`,
        start_url: `/`,
        background_color: `#9ba837`,
        theme_color: `#9ba837`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
