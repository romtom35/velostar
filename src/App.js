import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap3/dist/css/bootstrap.min.css';
import {Grid, Row, Col, Alert} from 'react-bootstrap';
import './App.css';
import ListStations from "./Components/ListStations";
import CardStation from "./Components/CardStation";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {idstation: 0}
    }


    render() {

        let card = null;
        if (this.state.idstation === 0){
            card = <Alert bsStyle="info">Veuillez sélectionner une station</Alert>;
        }else{
            card = <CardStation idstation={this.state.idstation}/>;
        }
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <ListStations idSelected={id => this.setState({ idstation: id })}/>
                    </Col>
                    <Col md={8}>
                        {card}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
