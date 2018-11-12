import React, { Component } from "react";
import CMEDataRow from "./CMEDataRow";
import { fetchCMEdata } from "../../serviceclient";
import WeatherInfo from "../WeatherInfo";

class CMEData extends Component {
  state = {
    currentType: "",
    dataForCurrentType: []
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetchCMEdata(this.fetchOk);
  }

  fetchOk = (data, err) => {
    if (err) {
      console.log("Data retrieval failed.");
    } else {
      this.setState({ dataForCurrentType: data });
    }
  };

  render() {
    var cme_data = this.state.dataForCurrentType.map(data => (
      <CMEDataRow data={data} key={data.activityID} />
    ));
    return (
      <div>
        <p>
          (Tähän tulossa myöhemmin dropdown-lista, josta hakea erilaisia
          sääilmiöitä)
        </p>
        <h2>Coronal Mass Ejection</h2>
        <h3>CME data (2018-01-01 - 2018-11-12)</h3>
        <ul>{cme_data}</ul>
      </div>
    );
  }
}

export default CMEData;
