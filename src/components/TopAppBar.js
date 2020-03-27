import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,

    },

    title: {
        position: 'absolute',
        zIndex: -1, //lets back button be clicked
        top: 'auto',
        left: 0,
        right: 0,
        margin: '',

    },
    appBar: {
        top: 'auto',
    },
    buffer:{
        paddingTop: 40,
    },
    backIcon:{
        marginRight: '.3em',
    },
}));

function TopAppBar(props) {
    const classes = useStyles();
    const history = useHistory();
    
    
    return (
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar id="back-to-top-anchor">
            <Button color="inherit" onClick={() => history.goBack()}><ArrowBackIcon className={classes.backIcon}></ArrowBackIcon>Back</Button>
            <Typography className={classes.title}variant={"subtitle1"}>{props.title}</Typography>
            </Toolbar>
        </AppBar>
    </div>
    );
    }

export default TopAppBar;
