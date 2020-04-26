import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TopAppBar from '../components/TopAppBar'
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


function PageOfBirdInfo(props) {
    const bird = props.getBirdChoice();
    const birds = props.birdList;
    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 80,
        },

    }));
    const classes = useStyles();
    const history = useHistory();
    const { getBirdChoice, ...rest } = props;

    function birdLinkLoop(){
        var birdLink = "";
        for(var i = 0; i < birds.length; i++){
            if(birds[i].bird == bird){
                birdLink = birds[i].link;
            }
        }
        return birdLink;
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
                                <Typography> 
                                    <a href={birdLinkLoop()}>Get more information on {bird} </a>
                                </Typography>
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