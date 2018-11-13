import React, { Component, Fragment } from "react";
import Select from "react-select";

const weatherTypes = ["CME", "FLR", "GST"];
const Checkbox = props => <input type="checkbox" {...props} />;

class Search extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <p>Choose space weather type:</p>
        <Select className="basic-single" classNamePrefix="select" />
      </Fragment>
    );
  }
}

export default Search;
