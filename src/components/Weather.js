import React, { Component } from "react";
import CME from "./CME/CME";
import { Grid, Row, Col } from "react-bootstrap";
import Search from "./Search";

class Weather extends Component {
  state = {
    weatherEvents: []
  };
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={3}>
              <Search />
            </Col>
            <Col xs={12} sm={9}>
              <CME />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Weather;
