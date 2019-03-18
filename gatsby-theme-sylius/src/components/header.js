import React from "react";
import { StaticQuery } from "gatsby";
import { graphql } from "gatsby";
import Search from "./search";
import logo from '../images/sylius-logo.png';

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header className="row align-items-center justify-space-between h-100">
        <div className="col">
          <img src={logo} alt="Sylius" style={{ width: "120px" }} />
        </div>
        <div className="col-auto">
          <Search searchIndex={data.siteSearchIndex.index} />
        </div>
      </header>
    )}
  />
);

export default Header;
