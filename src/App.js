import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Weather from "./components/Weather";
import "./App.css";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Grid>
            <Switch>
              <Route exact name="index" path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/weather" component={Weather} />
              <Route path="/type/:id" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
