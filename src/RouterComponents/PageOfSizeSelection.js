import React, { Component } from 'react';
import BirdSize from '../components/BirdSize';

class PageOfSizeSelection  extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
render(){
    return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
    }
};

export default PageOfSizeSelection;