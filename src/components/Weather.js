import React, { Component } from "react";
import CME from "./CME/CME";

class Weather extends Component {
  render() {
    return (
      <div>
        <p>Hakuominaisuus tulossa tähän</p>
        <CME />
      </div>
    );
  }
}

export default Weather;
