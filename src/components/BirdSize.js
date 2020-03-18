import React, { Component } from 'react';

class BirdSize extends React.Component {
    constructor(props) {
        super(props);


    }
    
render(){
    return <div onClick={() => this.props.setSizeChoice(this.props.chosenSize)}>size!</div>;
    }
};

export default BirdSize;