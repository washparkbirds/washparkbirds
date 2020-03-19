import React from 'react';
import ColorCard from '../components/ColorCard';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black', 'brown'];


function PageOfColorSelection(props) {

    const { setColorChoice, getColorChoice, ...rest } = props;

    function colorCardLoop(){
        var colorsArray = colors.map(color => {return (<ColorCard chosenColor={color} key={color} getColorChoice={getColorChoice} setColorChoice={setColorChoice}></ColorCard>)});
        return colorsArray;
    }

    return (
        colorCardLoop()
    );
};

export default PageOfColorSelection;