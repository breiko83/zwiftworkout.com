/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Zwift Workout Editor`,
    description: `Edit and share your Zwift workouts directly from your browser`,
    author: `Carlo Schiesaro`,
    url: 'https://www.zwiftworkout.com',
    image: 'logo.png'
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,   
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.zwiftworkout.com`,
      },
    },     
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    `gatsby-plugin-sass`
  ],
}
