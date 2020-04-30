import React from 'react';
import ColorCard from '../components/ColorCard';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TopAppBar from '../components/TopAppBar'
import { makeStyles } from '@material-ui/core/styles';



function PageOfColorSelection(props) {

    const colors = props.colorList;
    //predefine for async
    const size = props.getSizeChoice();
    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 40,
        },

    }));
    if(size == null){

        window.location.href = 'http://washparkbirds.netlify.app/';
    }
    const classes = useStyles();

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
        <React.Fragment>
            <TopAppBar title="Bird Color"></TopAppBar>
            <Typography className={classes.bufferBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">Please choose one main color:</Typography>
            <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center" spacing={0}>
                {colorCardLoop()}
            </Grid>
        </React.Fragment>

        
    );
};

export default PageOfColorSelection;