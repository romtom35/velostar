import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import ListStations from "./Components/ListStations";

class App extends Component {
  render() {
    return (
        <Grid>
          <Row>
              <Col md={4}>
                <ListStations/>
              </Col>
              <Col md={8}>

              </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
