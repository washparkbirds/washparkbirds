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
        this.birdSizeLoop = this.birdSizeLoop.bind(this);
    
    }
    birdSizeLoop(){
        var sizes = ['small', 'medium', 'large'];
        sizes = sizes.map(size => {return (<BirdSize chosenSize={size} setSizeChoice={this.props.setSizeChoice}></BirdSize>)});
        return sizes;
    }
    
    //return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
    
render(){

    return (
        this.birdSizeLoop()
    );
    }
};

export default PageOfSizeSelection;