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
        window.location.href="../"
    }
    const useStyles = makeStyles(theme => ({
  
        bufferBar:{
            paddingTop: 80,
        },

    }));
    const classes = useStyles();
    const { getBirdChoice, ...rest } = props;

    //makes sure that the user has all the neccesary info

    function birdLinkLoop(){
        var birdLink = "";
        for(var i = 0; i < birds.length; i++){
            if(birds[i].bird == bird){
                birdLink = birds[i].link;
            }
        }
        return birdLink;
    }
    function clickFun(){
        //will nav to start page to preserve navigation w/ netlify then navigate to external page
        history.push('/');
        window.location.assign(birdLinkLoop());
    }
    return (
        <React.Fragment>
            <TopAppBar title={bird}></TopAppBar>
            <Typography className={classes.bufferBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">{bird}</Typography>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center" spacing={0}>  
                <Grid item xs={12} sm={6} lg={4}>
                        <React.Fragment>
                        <Paper elevation={3}>          
                            <Grid item xs={12} sm={12} lg={12}>
                                <img src={"/images/"+ bird + ".png"} alt={props.chosenSize + " bird"}></img>
                                <Typography>
                                    {bird.bird}
                                </Typography>
                                <Button variant="contained" color= '#FFFFFF' className={classes.root} onClick={() => clickFun()}>
                                Get more information on {bird} 
                                </Button>
                            </Grid>
                        </Paper>
                        </React.Fragment>
                        <Button variant="contained" color="primary" size="large" onClick={ () => history.push('/')}>
                                BACK TO START
                        </Button>
                    </Grid>
                </Grid>
        </React.Fragment>

        
    );
};

export default PageOfBirdInfo;