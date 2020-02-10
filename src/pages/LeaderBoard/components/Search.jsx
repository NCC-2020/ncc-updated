import React, { Component } from "react";
import "./Search.css";
//import "font-awesome/css/font-awesome.min.css";
class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSearch, teams, Searching, search } = this.props;

    return (
      <div className="row myrow">
        <span>
          <input
            type="text"
            className="form-control"
            id="filter"
            placeholder="Search..."
            onChange={Searching}
            autoComplete="off"
          />
        </span>
        <button
          onClick={() => onSearch(this.props.search)}
          className="btnSearch"
        >
          <img
            src="/Search.png"
            style={{ height: "100%", width: "100%" }}
          ></img>
        </button>
      </div>
    );
  }
}

export default Search;
