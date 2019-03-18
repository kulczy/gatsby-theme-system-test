const path = require(`path`)

const developmentMenu = [
  {
    title: "Index",
    slug: "/"
  },
  {
    title: "Md",
    slug: "/md",
    children: [
      {
        title: "Md",
        slug: "/md"
      }
    ]
  }
];

module.exports = {
  siteMetadata: {
    title: "Theme",
    menu:
      global.process.env.npm_package_name === "gatsby-theme-sylius"
        ? developmentMenu
        : []
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src/pages`),
        name: "pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.fields.slug
          }
        }
      }
    }
  ]
};
