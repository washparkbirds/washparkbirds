import React, { Component } from 'react';

class BirdSize extends React.Component {
    constructor(props) {
        super(props);


    }
    
render(){
    return <div onClick={() => this.props.setSizeChoice(this.props.chosenSize)}>{this.props.chosenSize}</div>;
    }
};

export default BirdSize;