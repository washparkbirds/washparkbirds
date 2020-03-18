import React, { Component } from 'react';

class ColorCard extends React.Component {
    constructor(props) {
        super(props);


    }
    
render(){
    return <div onClick={ () => this.props.setColorChoice(this.props.chosenColor) }>{this.props.chosenColor}</div>;
    }
};

export default ColorCard;