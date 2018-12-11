import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import ItemStation from './ItemStation';

class ListStations extends Component {

    constructor(props) {
        super(props);
        this.state = {stations: []};
    }

    componentDidMount() {
        fetch('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel&rows=99&facet=nom&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles&facet=nombrevelosdisponibles')
            .then(response => response.json())
            .then(data => this.setState({stations: data.records}))
    }
    idSelected(id){
this.props.idSelected(id);
    }

    render() {

        const items = this.state.stations.map(station => <ItemStation key={station.fields.idstation} station={station.fields} idSelected={id => this.idSelected(id)}/>);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}

export default ListStations;