import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const generateMenu = (items, ulClass = null) => (
    <ul className={ulClass}>
      {items.map((item, index) => (
        <li key={index} className="sidenav__item">
          <a href={item.slug} className="sidenav__link">
            {item.title}
          </a>
          {item.children ? generateMenu(item.children) : ""}
        </li>
      ))}
    </ul>
  );
  
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              menu {
                title
                slug
                children {
                  title
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>{generateMenu(data.site.siteMetadata.menu, "sidenav")}</div>
      )}
    />
  );
}
