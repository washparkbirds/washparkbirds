import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    root: {

        outline: 0,
        //background:  props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
        minWidth: '100%',
        minHeight: '8em',
        margin: 0,
        padding: 0,
        fontSize: '2em',
        textShadow: '-1px -1px 0 #404040, 1px -1px 0 #404040, -1px 1px 0 #404040, 1px 1px 0 #404040',
        color: '#FFFFFF',
        padding: '.5em',
        
        "&:focus": {
           // background:  props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
            color: '#FFFFFF',
            outline: "0 !important",
            },
    },

    paper: {
        marginLeft: '1em',
        marginRight: '1em',
        marginTop: '.65em',
        marginBottom: '.65em',
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

    icon: {
        //different scope here!!
        fontSize: '2em',
        color: 'gray',
    }
});

function BirdSelectionCard(props) {

    const { cBird, disabled, ...other } = props;
    const classes = useStyles(props);
    return <Button  height="100%" variant="outlined" className={classes.root} {...other}/>;
};

export default function AdaptingHook(props) {
    const [currBirdChoice, setCurrBirdChoice] = useState(null);
    const { cBird, disabled, ...other } = props;
    const history = useHistory();

    const classes = useStyles(props);

    function clickFun(){
        props.setBirdChoice(props.chosenBird);
        setCurrBirdChoice(props.chosenBird);
        setTimeout(() => history.push('/birdInfo'), 650);
        
    }

return (
    <Paper className={classes.paper} elevation={4}>
        <BirdSelectionCard onBlur={ () => {setCurrBirdChoice(null);}} cBird={props.chosenBird} disabled={props.chosenBird === props.getBirdChoice()} onClick={ () => clickFun()}>
            {
            <Grid  container
            direction="column"
            justify="space-evenly"
            alignItems="center">
                <Grid item xs={12} sm={12} lg={12}>
                    <img className={classes.imageSize} src={"/images/" + props.chosenBird + ".png"}></img>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    {props.chosenBird === currBirdChoice ? <CheckIcon className={classes.icon}/> : props.chosenBird}
                </Grid>
            </Grid>
            }
        </BirdSelectionCard>
    </Paper>

);
}