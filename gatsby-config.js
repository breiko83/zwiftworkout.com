/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `zwiftworkout.com`,
    description: `Edit and share your Zwift workouts directly from your browser`,
    author: `Carlo Schiesaro`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,        
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {      
        path: `${__dirname}/src/pages/`,
      },
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {          
          default: require.resolve("./src/components/layout.js"),
        },
      }
    },
  ],
}
