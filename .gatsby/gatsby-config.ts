const builder = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-G8K0DDDLYW`,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@': `src`,
          '@components': `src/components`,
          '@pages': `src/pages`,
          '@utils': `src/utils`,
          '@templates': `src/templates`,
          '@root': `src/root`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `phyzess.me`,
        short_name: `phyzess.me`,
        start_url: `/`,
        background_color: `#f0f0f3`,
        theme_color: `#f8807d`,
        display: `standalone`,
        icon: `static/avatar.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToStylesProvider: `.gatsby/mui-styles-provider-props`,
      },
    },
  ],
}

export default builder
