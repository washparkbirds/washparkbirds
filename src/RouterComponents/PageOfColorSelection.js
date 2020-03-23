import React from 'react';
import ColorCard from '../components/ColorCard';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



function PageOfColorSelection(props) {

    const colors = props.colorList;

    const { setColorChoice, getColorChoice, ...rest } = props;

    function colorCardLoop(){
        var colorsArray = colors.map(color => {
            return (
                <Grid item xs={12} sm={6} lg={4}>
                    <ColorCard chosenColor={color} key={color} getColorChoice={getColorChoice} setColorChoice={setColorChoice}></ColorCard>
                </Grid>
            )
        });
        return colorsArray;
    }

    return (
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center" spacing={0}>
            {colorCardLoop()}
        </Grid>
        
    );
};

export default PageOfColorSelection;