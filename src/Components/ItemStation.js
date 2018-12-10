import React, {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';

class ItemStation extends Component {
    render() {
        return (
            <ListGroupItem className='d-flex justify-content-between align-items-center'>
                {this.props.station.nom}
                <Badge bsStyle='primary'> {this.props.station.nombrevelosdisponibles}</Badge>
            </ListGroupItem>
               );
    }
}

export default ItemStation;