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
            <React.Fragment><Grid item xs={0} sm={3} lg={3}>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <BirdSize chosenSize={size} key={size} getSizeChoice={getSizeChoice} setSizeChoice={setSizeChoice}></BirdSize>
                </Grid>
                <Grid item xs={0} sm={3} lg={3}>
                </Grid>
            </React.Fragment>
            )
        });
        return sizesArray;
    }
    
    //return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
    
    return (
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center" spacing={0}>
            {birdSizeLoop()}
            <Link to="/color">Navigate To color Page</Link>

        </Grid>
    );

};

export default PageOfSizeSelection;