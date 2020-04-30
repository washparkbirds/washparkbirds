
import React from 'react';
import BirdSize from '../components/BirdSize';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import TopAppBar from '../components/TopAppBar'



function PageOfAbout(props) {

    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 40,
        },

    }));

    const classes = useStyles();



    return (
        <React.Fragment>
            <TopAppBar title="About Us"></TopAppBar>
           
        </React.Fragment>
    );

};

export default PageOfAbout;