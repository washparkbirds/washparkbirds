
    //return <div onClick={ () => this.props.setColorChoice(this.props.chosenColor) }>{this.props.chosenColor}</div>;
    import React from 'react';
    import PropTypes from 'prop-types';
    import { makeStyles } from '@material-ui/core/styles';
    import Button from '@material-ui/core/Button';
    import Paper from '@material-ui/core/Paper';
    import Typography from '@material-ui/core/Typography';
    import CheckIcon from '@material-ui/icons/Check';
    import { useState } from 'react';

    
    
    const useStyles = makeStyles({
        root: {

            outline: 0,
            background:  props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
            minWidth: '100%',
            minHeight: '4em',
            margin: 0,
            padding: 0,
            fontSize: '4em',
            textShadow: '-1px -1px 0 #404040, 1px -1px 0 #404040, -1px 1px 0 #404040, 1px 1px 0 #404040',
            color: '#FFFFFF',
            
            "&:focus": {
                background:  props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
                color: '#FFFFFF',
                outline: "0 !important",
                },
        },

        paper: {
            marginLeft: '1em',
            marginRight: '1em',
            marginTop: '1em',
            marginBottom: '1em',

        },

        icon: {
            //different scope here!!
            fontSize: '4em',
            color: props => props.chosenColor === "white" ? "black" : "white"
        }
    });
    


    function ColorButton(props) {
    const { cColor, disabled, ...other } = props;
    const classes = useStyles(props);
    return (
            <Button  height="100%" variant="outlined" className={classes.root} {...other}/>
    );
    }
    


    export default function AdaptingHook(props) {
        const [currColorChoice, setCurrColorChoice] = useState(null);

        const { cColor, disabled, ...other } = props;

        const classes = useStyles(props);
        //console.log(props.getColorChoice())
    return (
        <Paper className={classes.paper} elevation={4}>
            <ColorButton onBlur={ () => {setCurrColorChoice(null);}} cColor={props.chosenColor} disabled={props.chosenColor === props.getColorChoice()} onClick={ () => {props.setColorChoice(props.chosenColor); setCurrColorChoice(props.chosenColor)}}>
                {props.chosenColor === currColorChoice ? <CheckIcon color="{}" className={classes.icon}/> : props.chosenColor}
            </ColorButton>
        </Paper>

    );
    }
    