const globImporter = require('node-sass-glob-importer');

module.exports = {
  pathPrefix: '/4.0',
  siteMetadata: {
    title: 'PatternFly 4',
    description: 'Documentation for PatternFly 4',
    author: 'Red Hat',
    siteUrl: 'https://v2.patternfly.org'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react`,
        path: `${__dirname}/_repos/react-core`,
        ignore: [`**/*.json`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react`,
        path: `${__dirname}/_repos/react-charts`,
        ignore: [`**/*.json`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react`,
        path: `${__dirname}/_repos/react-table`,
        ignore: [`**/*.json`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ts-docs`,
        path: `${__dirname}/ts-docs/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `core`,
        path: `${__dirname}/_repos/core`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links', // catch links in markdown files and use gatsby-link to navigate
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline', // this plugin enables Progressive Web App + Offline functionality https://gatsby.app/offline
    'gatsby-plugin-typescript',
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://v2.patternfly.org',
        sitemap: 'https://v2.patternfly.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: 'prism-language-'
          //   }
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-mdx-tmp`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/templates/mdxPageTemplate.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: globImporter(),
        postCssPlugins: [],
        precision: 5
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PatternFly',
        short_name: 'PatternFly',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      },
    },
    // {
    //   resolve: 'gatsby-remark-embed-snippet',
    //   options: {
    //     directory: `${__dirname}/_repos/core`
    //   }
    // },
  ],
}
