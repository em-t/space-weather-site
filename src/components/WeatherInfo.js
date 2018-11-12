import React, { Component } from "react";
import { fetchCMEinfo } from "../serviceclient";

class WeatherInfo extends Component {
  state = {
    currentType: "CME",
    info: []
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    fetchCMEinfo(this.fetchOK, this.state.currentType);
  }

  fetchOK = (info, err) => {
    if (err) {
      console.log("Data info missing.");
    } else {
      console.log("info: " + this.state.info);
      this.setState({ info: info });
    }
  };

  render() {
    var info = this.state.info;
    return (
      <div>
        <h2>{info.name}</h2>
        <p>{info.description}</p>
        <p>
          <a href={info.source}>Read More</a>
        </p>
      </div>
    );
  }
}

export default WeatherInfo;
