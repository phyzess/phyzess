const builder = {
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@': `src`,
          '@components': `src/components`,
          '@pages': `src/pages`,
          '@utils': `src/utils`,
          '@templates': `src/templates`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `phyzess.me`,
    //     short_name: `phyzess`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `static/avatar.png`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-stylus`,
  ],
}

export default builder
