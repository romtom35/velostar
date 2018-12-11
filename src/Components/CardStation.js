import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class CardStation extends Component {

    constructor(props) {
        super(props);
        this.state = {station: null};
    }
    componentDidMount() {
        this.loadStation();
    }
    componentDidUpdate(prevProps){
        if(this.props.idstation !== prevProps.idstation){
            this.loadStation();
        }
    }
    loadStation(){
        fetch('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&q=idstation%3D' + this.props.idstation +'&rows=10&facet=nom&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles&facet=nombrevelosdisponibles')
            .then(response => response.json())
            .then(data => this.setState({station: data.records[0].fields}))
    }

    render() {
        if(!this.state.station){
            return <div>Chargement en cours...</div>;
        }
        return (
            <Panel bsStyle="primary">
                <Panel.Heading componentClass='h3'>
                    <Panel.Title>{this.state.station.nom}</Panel.Title>
                    </Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>&hellip;</ListGroupItem>
                    </ListGroup>
                </Panel.Body>
            </Panel>
        );
    }
}

export default CardStation;