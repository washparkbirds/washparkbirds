import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TopAppBar from '../components/TopAppBar'
import { makeStyles } from '@material-ui/core/styles';
import BirdSelectionCard from '../components/BirdSelectionCard';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function PageOfBirdSelection(props) {
    const color = props.getColorChoice();
    const size = props.getSizeChoice();
    const birds = props.birdList;
    const useStyles = makeStyles(theme => ({

        bufferButton:{
            marginTop: 40,

        },

        topBar:{
            textTransform: 'capitalize',
            paddingTop: 40,

        },

    }));
    const classes = useStyles();

    const history = useHistory();

    //makes sure that the user has all the neccesary info
    if(color == null){

        window.location.href = 'http://washparkbirds.netlify.app/';
    }
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
            if(birdItem.color1 == color || birdItem.color2 == color || birdItem.color3 == color || birdItem.fcolor1 == color || birdItem.fcolor2 == color || birdItem.fcolor3 == color){
                if(birdItem.size == size /*&& birdItem[getSeason()] == "true"*/){
                    console.log(birdItem.name+" "+birdItem.color1+" "+color);
                    return (
                        <Grid item xs={12} sm={6} lg={4}>
                            <React.Fragment>
                                <BirdSelectionCard chosenBird={birdItem.name} key={birdItem.name} getBirdChoice={getBirdChoice} setBirdChoice={setBirdChoice}></BirdSelectionCard>
                            </React.Fragment>
                        </Grid>
                    )
                }
            }
        });
        return birdsArray;
    }

    return (
        <React.Fragment>
            <TopAppBar className={classes.topBar} title={"Bird Type"}></TopAppBar>
            <Typography className={classes.topBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">{"What Bird Do You See?"}</Typography>
            <Typography className={classes.topBar} variant="subtitle2" component="p" align="center" gutterBottom={true} display="block">{props.getSizeChoice() + ' Birds with ' + props.getColorChoice() + ' coloring'}</Typography>

            <Grid container
            direction="row"
            justify="center"
            alignItems="center" spacing={0}>
                {birdCardLoop()}
                <Grid item xs={12} sm={6} lg={4}>
                </Grid>
            </Grid>

            <Button variant="contained" color="secondary" onClick={() => history.goBack()} className={classes.bufferButton}>Dont See Your Bird? Click Here to Go Back</Button>
        </React.Fragment>

        
    );
};

export default PageOfBirdSelection;