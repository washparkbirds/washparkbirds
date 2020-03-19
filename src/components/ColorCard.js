
    //return <div onClick={ () => this.props.setColorChoice(this.props.chosenColor) }>{this.props.chosenColor}</div>;
    import React from 'react';
    import PropTypes from 'prop-types';
    import { makeStyles } from '@material-ui/core/styles';
    import Button from '@material-ui/core/Button';
    import CheckIcon from '@material-ui/icons/Check';
    import { useState } from 'react';

    
    
    const useStyles = makeStyles({
    root: {
        
        outline: 1,
        background:  props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
        borderColor: props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
        borderRadius: 3,
        color: "white",
        "&:focus": {
            background: "white",
            borderColor: props => props.cColor === "yellow" ? "#D3B53D" : props.cColor,
            borderRadius: 3,
            color: "gray",
            outline: "0 !important",
            },
        boxShadow: 'gray',
        height: 48,
        padding: '0 30px',
        margin: 8,
    },

    icon: {
        //different scope here!!
        color:  props => props.chosenColor === "yellow" ? "#D3B53D" : props.chosenColor,
    }
    });
    


    function ColorButton(props) {
    const { cColor, disabled, ...other } = props;
    const classes = useStyles(props);
    return <Button  variant="outlined" className={classes.root} {...other}/>;
    }
    


    export default function AdaptingHook(props) {
        const [currColorChoice, setCurrColorChoice] = useState(null);

        const { cColor, disabled, ...other } = props;

        const classes = useStyles(props);
        //console.log(props.getColorChoice())
    return (
        <ColorButton onBlur={ () => {setCurrColorChoice(null);}} cColor={props.chosenColor} disabled={props.chosenColor === props.getColorChoice()} onClick={ () => {props.setColorChoice(props.chosenColor); setCurrColorChoice(props.chosenColor)}}>
            {props.chosenColor === currColorChoice ? <CheckIcon color="primary" className={classes.icon}/> : props.chosenColor}</ColorButton>
    );
    }
    