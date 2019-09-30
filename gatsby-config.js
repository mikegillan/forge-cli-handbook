require('dotenv').config();

const path = require('path');
const { version } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: require.resolve('@arcblock/gatsby-theme-docs'),
      options: {
        version: `v${version}`,
        sourceDirs: [path.resolve(__dirname, 'src')],
        siteMetadata: {
          title: 'Forge CLI',
          description: 'Forge SDK Documentation',
          sidebarWidth: 360,
        },
        algoliaSearch: {
          enabled: process.env.NODE_ENV !== 'production',
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          adminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
          searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        },
        navItems: [],
        extraPlugins: [],
      },
    },
  ],
};