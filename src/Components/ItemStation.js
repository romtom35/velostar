import React, {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';

class ItemStation extends Component {

    handleClick(event){
        event.preventDefault();
        this.props.idSelected(this.props.station.idstation);
    }


    render() {
        let bsStyle = 'primary';
        if(!this.props.station.nombrevelosdisponibles){
            bsStyle = 'danger';
        }
        return (
            <ListGroupItem href="#" onClick={event => this.handleClick(event)} className='d-flex justify-content-between align-items-center'>
                {this.props.station.nom}
                <Badge bsStyle={bsStyle} className='badge-pill'> {this.props.station.nombrevelosdisponibles}</Badge>
            </ListGroupItem>
               );
    }
}

export default ItemStation;