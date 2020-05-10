import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    backButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function TopAppBar(props) {
    const classes = useStyles();
    const history = useHistory();
    
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => history.goBack()} edge="start" className={classes.backIcon} color="inherit" aria-label="back">
                <ArrowBackIcon />  <Typography variant="button">&nbsp;Back</Typography>     
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                {props.title}
                </Typography>
                <IconButton onClick={() => history.push('/about')} edge="start" className={classes.menuButton} color="inherit" aria-label="About Us">
                <Typography variant="button">About&nbsp;</Typography><InfoIcon />       
                </IconButton>  
            </Toolbar>
            </AppBar>
        </div>
    );
    }

export default TopAppBar;
