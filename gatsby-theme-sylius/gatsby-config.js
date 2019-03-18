const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Sylius`,
    menu: [
      {
        title: "Index",
        slug: "/",
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
    ],
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
