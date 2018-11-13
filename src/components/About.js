import React, { Component } from "react";
import { fetchImage } from "../serviceclient";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./About.css";

class About extends Component {
  state = {
    image: ""
  };

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    fetchImage(this.fetchOk);
  }

  fetchOk = (image, err) => {
    if (err) {
      // virhekäsittely
    } else {
      this.setState({ image: image });
    }
  };

  render() {
    var todaysImage = this.state.image;
    return (
      <Grid>
        <Row className="show-grid text-justify">
          <Col xs={12} sm={8}>
            <div>
              {/* TODO: fallback kuva jos päivän kuvaa ei löydy */}
              <Image
                src={todaysImage.url}
                alt="space"
                className="space-pic"
                responsive
                title={todaysImage.explanation}
              />
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <h2>About</h2>
            <h3>Space Weather</h3>
            <p>
              Space weather is a branch of space physics and aeronomy concerned
              with the time varying conditions within the Solar System,
              including the solar wind, emphasizing the space surrounding the
              Earth, including conditions in the magnetosphere, ionosphere,
              thermosphere, and exosphere. Space weather is distinct from the
              terrestrial weather of the Earth's atmosphere (troposphere and
              stratosphere). The term space weather was first used in the 1950s
              and came into common usage in the 1990s.
            </p>
            <p className="source">
              Source:{" "}
              <a href="https://en.wikipedia.org/wiki/Space_weather">
                Wikipedia
              </a>
            </p>
            <h3>About FLARE</h3>
            <p>
              FLARE uses APIs provided by{" "}
              <a href="https://ccmc.gsfc.nasa.gov/donki/">DONKI</a>, the Space
              Weather Database of Notifications, Knowledge, and Information.
              DONKI is a comprehensive on-line tool for space weather
              forecasters, scientists, and the general space science community.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
