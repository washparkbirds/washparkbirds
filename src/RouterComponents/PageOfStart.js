import React, { Component } from 'react';
import BirdSize from '../components/BirdSize';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TopAppBar from '../components/TopAppBar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';

function PageOfStart(props) {

    
    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 200,
        },

        root:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minWidth: '100%',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: '#ffffff',
        height: 48,
        padding: '0 30px',
        }

    }));

    const classes = useStyles();
    return (
        <React.Fragment>
            <TopAppBar title="Welcome to WashParkBirds"></TopAppBar>
            <Typography className={classes.bufferBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">WashParkBirds</Typography>
            <Grid container
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            >
                <Grid item xs={12} sm={12} lg={12}>
                <img src={"/images/small.png"} alt="Bird Image"></img>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <Button variant="contained" color= '#FFFFFF' className={classes.root}>
                        <Link to="/size">Start</Link>
                    </Button>
                </Grid>
            </Grid>
            <br></br>
        </React.Fragment>

        
    );
};


export default PageOfStart;

