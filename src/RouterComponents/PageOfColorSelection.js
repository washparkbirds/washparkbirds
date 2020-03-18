import React, { Component } from 'react';
import ColorCard from '../components/ColorCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class PageOfSizeSelection  extends React.Component {
    constructor(props) {
        super(props);
        this.birdSizeLoop = this.colorCardLoop.bind(this);
    
    }
    colorCardLoop(){
        var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black', 'brown'];
        colors = colors.map(color => {return (<ColorCard chosenColor={color} setColorChoice={this.props.setColorChoice}></ColorCard>)});
        return colors;
    }
    
    //return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
    
render(){

    return (
        this.colorCardLoop()
    );
    }
};

export default PageOfSizeSelection;