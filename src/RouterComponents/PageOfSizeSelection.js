import React from 'react';
import BirdSize from '../components/BirdSize';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import TopAppBar from '../components/TopAppBar'



function PageOfSizeSelection(props) {

    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 40,
        },

    }));

    const sizes = props.sizeList;
    const classes = useStyles();
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
            <TopAppBar title="Bird Size"></TopAppBar>
            <Typography className={classes.bufferBar}variant="h5" component="h2" align="center" gutterBottom={true} display="block">Please choose the bird's size:</Typography>
            <Grid  container
            direction="row"
            justify="center"
            alignItems="center" spacing={0}>
                {birdSizeLoop()}
            </Grid>
        </React.Fragment>
    );

};

export default PageOfSizeSelection;