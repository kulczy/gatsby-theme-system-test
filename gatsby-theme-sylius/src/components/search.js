import React, { Component } from "react"
import { Link } from "gatsby";
import { Index } from "elasticlunr"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <div
          className={
            this.state.results.length ? "dropdown show" : "dropdown"
          }
        >
          <input
            type="text"
            value={this.state.query}
            onChange={this.search}
            className="form-control"
            placeholder="search..."
          />
          <div
            className={
              this.state.results.length
                ? "dropdown-menu dropdown-menu-right show"
                : "dropdown-menu dropdown-menu-right"
            }
          >
            {this.state.results.map(page => (
              <Link className="dropdown-item" key={page.id} to={page.path}>
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
