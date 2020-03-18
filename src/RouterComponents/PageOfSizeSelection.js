import React, { Component } from 'react';
import BirdSize from '../components/BirdSize';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class PageOfSizeSelection  extends React.Component {
    constructor(props) {
        super(props);
        var sizes = ['small', 'medium', 'large'];
    }
    
    
    //return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
    
render(){

    return (
        <div>
        <BirdSize chosenSize="greg" setSizeChoice={this.props.setSizeChoice}></BirdSize>
        </div>
    );
    }
};

export default PageOfSizeSelection;