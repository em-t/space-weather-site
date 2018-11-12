import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>FLARE</h2>
          <p>A Space Weather Service</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
      </Grid>
    );
  }
}

export default Home;
