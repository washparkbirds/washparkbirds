import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TopAppBar from '../components/TopAppBar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


function PageOfBirdInfo(props) {
    const bird = props.getBirdChoice();
    const birds = props.birdList;
    const history = useHistory();

    //prevents bad backs
    if (bird == null){
        window.location.href = 'http://washparkbirds.netlify.app/';
    }
    const useStyles = makeStyles(theme => ({
  
        bufferBar:{
            paddingTop: 40,
        },

        bufferButton:{
            paddingTop: '1em',
        },

        imageSize: {
            width: '80%',
            maxWidth: '50%',
            maxHeight: '50%',
            minWidth: '200px',
            minHeight: '150px',
            display: 'block',
            overflow: 'hidden',
            margin: '0 auto',
        },     

    }));
    const classes = useStyles();
    const { getBirdChoice, ...rest } = props;

    //makes sure that the user has all the neccesary info

    function birdLinkLoop(){
        var birdLink = "";
        for(var i = 0; i < birds.length; i++){
            if(birds[i].name == bird){
                birdLink = birds[i].link;
            }
        }
        return birdLink;
    }
    function clickFun(){
        //will nav to start page to preserve navigation w/ netlify then navigate to external page
        window.location.href = birdLinkLoop();
    }
    return (
        <React.Fragment>
            <TopAppBar title={bird}></TopAppBar>
            <Typography className={classes.bufferBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">{bird}</Typography>
            <Grid container
            direction="column"
            justify="center"
            alignItems="center" spacing={0}>  
                <Grid item xs={12} sm={12} lg={12}>
                        <React.Fragment>
                        <Paper elevation={3}>          
                            <Grid item xs={12} sm={12} lg={12}>
                                <img className={classes.imageSize} src={"/images/" + bird + ".png"}  alt={props.chosenSize + " bird"} onClick={() => clickFun()}></img>
                                <Typography>
                                    {bird.name}
                                </Typography>
                                <Button variant="contained" className={classes.root} onClick={() => clickFun()}>
                                Get more information on {bird} 
                                </Button>
                            </Grid>
                        </Paper>
                        </React.Fragment>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} className={classes.bufferButton}>
                    <Button variant="contained" color="primary" size="large" onClick={ () => history.push('/')}>
                                Back To Start!
                        </Button>
                    </Grid>
                </Grid>
        </React.Fragment>

        
    );
};

export default PageOfBirdInfo;