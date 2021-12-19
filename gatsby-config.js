module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-vanilla-extract',
    'gatsby-source-hnapi',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@templates': 'src/templates',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lora:400,500,`, `Fondamento:400`],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/icon.png',
      },
    },
  ],
};
