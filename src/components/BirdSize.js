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

    icon: {
        //different scope here!!
        fontSize: '2em',
        color: 'gray',
    }
});

//found better solution
/*function imageServe(size){

    if (size === 'large'){
        return Large;
    }
    else if(size === 'medium'){
        return Medium;

    }
    else if (size === 'small'){
        return Small;

    }

}*/
function BirdSize(props) {
    const { cSize, disabled, ...other } = props;
    const classes = useStyles(props);
    return <Button  height="100%" variant="outlined" className={classes.root} {...other}/>;
};

export default function AdaptingHook(props) {
    const [currSizeChoice, setCurrSizeChoice] = useState(null);
    const { cSize, disabled, ...other } = props;
    const history = useHistory();

    const classes = useStyles(props);

    function clickFun(){
        props.setSizeChoice(props.chosenSize);
        setCurrSizeChoice(props.chosenSize);
        setTimeout(() => history.push('/color'), 650);
        
    }

    //console.log(props.getColorChoice())
return (
    <Paper className={classes.paper} elevation={4}>
        <BirdSize onBlur={ () => {setCurrSizeChoice(null);}} cSize={props.chosenSize} disabled={props.chosenSize === props.getSizeChoice()} onClick={ () => clickFun()}>
            {
            <Grid  container
            direction="column"
            justify="space-evenly"
            alignItems="center">
                <Grid item xs={12} sm={12} lg={12}>
                    <img src={"/images/" + props.chosenSize + ".png"} alt={props.chosenSize + " bird"}></img>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    {props.chosenSize === currSizeChoice ? <CheckIcon className={classes.icon}/> : props.chosenSize}
                </Grid>
            </Grid>
            }
        </BirdSize>
    </Paper>

);
}