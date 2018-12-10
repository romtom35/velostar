import React, {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';

class ItemStation extends Component {
    render() {
        return (
            <ListGroupItem>{this.props.station.nom}</ListGroupItem>
               );
    }
}

export default ItemStation;