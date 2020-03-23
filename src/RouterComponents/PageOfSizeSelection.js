import React from 'react';
import BirdSize from '../components/BirdSize';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


function PageOfSizeSelection(props) {

    const sizes = props.sizeList;

    const { setSizeChoice, getSizeChoice} = props;


    function birdSizeLoop(){
        var sizesArray = sizes.map(size => {
            return (
                <Grid item xs={12} sm={8}>
                    <BirdSize chosenSize={size} key={size} getSizeChoice={getSizeChoice} setSizeChoice={setSizeChoice}></BirdSize>
                </Grid>
            )
        });
        return sizesArray;
    }
    
    //return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
    
    return (
        <React.Fragment>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center" spacing={0}>
            {birdSizeLoop()}
        </Grid>
        <Link to="/color">Navigate To color Page</Link>
        </React.Fragment>
    );

};

export default PageOfSizeSelection;