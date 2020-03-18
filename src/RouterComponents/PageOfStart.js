import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageOfStart  extends React.Component {
    /*constructor(props) {
        super(props);
        //possibly add option to wipe state clean if on start page
    }*/
    
render(){
    return (
        <div>
            <Link to="/size">Navigate To Size Page</Link>
            <br></br>
            <Link to="/color">Navigate To Color Page</Link>

        </div>
    );
    }
};

export default PageOfStart;
