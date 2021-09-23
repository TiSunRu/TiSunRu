const path = require("path");
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tisun.ru",
    title: "Tisun",
    description: "ТiSun - это премиальные наборы чая и кофе, состоящие из оригинальных чайных и кофейных купажей, которые и подарят Вам ощущение уюта, комфорта, а также помогут создать теплую атмосферу в любое время года.",
  },
  plugins: [
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "tisun",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "TextContent",
        path: `${__dirname}/src/textcontent/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`ru`, `en`],
        defaultLanguage: `en`,
        siteUrl: `https://example.com/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['en']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ]
      }
    }
  ],
};
