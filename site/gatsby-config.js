module.exports = {
  __experimentalThemes: [{ resolve: "gatsby-theme-sylius", options: { root: __dirname } }],

  siteMetadata: {
    title: 'Site',
    menu: [
      {
        title: "The Book",
        slug: "/the-book"
      },
      {
        title: "The Customization Guide",
        slug: "/the-customization-guide"
      },
      {
        title: "Sylius Plugins",
        slug: "/sylius-plugins"
      },
      {
        title: "The Cookbook",
        slug: "/the-cookbook",
        children: [
          {
            title: "Entities",
            slug: "/the-cookbook/entities"
          },
          {
            title: "Api",
            slug: "/the-cookbook/api"
          },
          {
            title: "Shop",
            slug: "/the-cookbook/shop"
          },
          {
            title: "Payments",
            slug: "/the-cookbook/payments"
          },
          {
            title: "E-mails",
            slug: "/the-cookbook/emails"
          }
        ]
      },
      {
        title: "The REST API reference",
        slug: "/the-rest-api-reference"
      }
    ]
  }
};
