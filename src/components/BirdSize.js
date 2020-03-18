import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BirdSize extends React.Component {
    constructor(props) {
        super(props);


    }
    
render(){
    return <Link to="../color" onClick={() => this.props.setSizeChoice(this.props.chosenSize)}>{this.props.chosenSize}</Link>;
    }
};

export default BirdSize;