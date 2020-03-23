
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

            outline: 1,
            background:  props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
            borderColor: props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
            borderRadius: 3,
            minWidth: '100%',
            minHeight: '5em',
            margin: 0,
            padding: 0,

            fontSize: '40px',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            color: "white",
            "&:focus": {
                background: "white",
                borderColor: props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
                borderRadius: 3,
                color: "gray",
                outline: "0 !important",
                },
            "&:hover": {
                    background: "white",
                    borderColor: props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
                    borderRadius: 3,
                    color: props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
                    outline: "0 !important",
                    },
            boxShadow: 'gray',
        },

        paper : {
            marginLeft: '1em',
            marginRight: '1em',
            marginTop: '1em',
            marginBottom: '1em',

        },

        icon: {
            //different scope here!!
            fontSize: 'inherit',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            color: ' props => {props.chosenColor === "yellow" ? "#D3B53D" : props.chosenColor;}',
         
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
                {props.chosenColor === currColorChoice ? <CheckIcon color="primary" className={classes.icon}/> : props.chosenColor}
            </ColorButton>
        </Paper>

    );
    }
    