import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TopAppBar from '../components/TopAppBar'
import { makeStyles } from '@material-ui/core/styles';
import BirdSelectionCard from '../components/BirdSelectionCard';

function PageOfBirdSelection(props) {
    const color = props.getColorChoice();
    const size = props.getSizeChoice();
    const birds = props.birdList;
    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 80,
        },

    }));
    const classes = useStyles();

    const { setBirdChoice, getBirdChoice, ...rest } = props;

    //determines what day of the year/365 we're currently at and what season that day is in
    function getSeason() {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 86400000;
        var day = Math.floor(diff / oneDay);
        if (day >= 80 && day <= 172 ){
            return "spring";
        } else if (day >= 173 && day <= 266){
            return "summer";
        } else if (day >= 267 && day <= 335){
            return "fall";
        } else {
            return "winter";
        }
    }
    function birdCardLoop(){
        var birdsArray = birds.map(birdItem => {
            if(birdItem.color == color && birdItem.size == size && birdItem[getSeason()] == true){
                return (
                    <Grid item xs={12} sm={6} lg={4}>
                        <React.Fragment>
                            <BirdSelectionCard chosenBird={birdItem.bird} key={birdItem.bird} getBirdChoice={getBirdChoice} setBirdChoice={setBirdChoice}></BirdSelectionCard>
                        </React.Fragment>
                    </Grid>
                )
            }
        });
        return birdsArray;
    }

    return (
        <React.Fragment>
            <TopAppBar title="Bird Type"></TopAppBar>
            <Typography className={classes.bufferBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">What bird did you see?</Typography>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center" spacing={0}>
                {birdCardLoop()}
            </Grid>
        </React.Fragment>

        
    );
};

export default PageOfBirdSelection;