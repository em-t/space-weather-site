import React, { Component } from "react";
import WeatherInfo from "../WeatherInfo";
import CMEData from "./CMEData";

class CME extends Component {
  state = {};
  render() {
    return (
      <div>
        <WeatherInfo />
        <br />
        <CMEData />
      </div>
    );
  }
}

export default CME;
