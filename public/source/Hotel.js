import React, {Component} from 'react';
import Photos from './Photos';
import Amenities from './Amenities';
import Reviews from './Reviews';
import Stars from './Stars';
import Address from './Address';
import {Button, Modal, FormGroup, Form, Col, FormControl} from 'react-bootstrap';


class Hotel extends Component {
    render(){
        
        return (
            <div>
               
                <Photos pics={this.props.hotel.photos} />
                
                
                <div id="titleRating">
                    <div className="hotelTitle">
                        <h2 id="hotelName">{this.props.hotel.name}</h2>
                        <Address key={this.props.hotel.address.line1} address={this.props.hotel.address} />
                    </div>
                    <Stars star={this.props.hotel.stars} />
                </div>
                
                <br/>
                
                <div id="desc">
                    <h3 id="desctitle">Description</h3>
                    <p id="descinfo">{this.props.hotel.description > 675 ? this.props.hotel.description.slice(0, 675) : this.props.hotel.description}</p>
                </div>
                
                <Amenities amenity={this.props.hotel.amenities} />
                
                <Reviews review={this.props.hotel} /> 
                
                
                
            </div>
        );
    }
}

export default Hotel;