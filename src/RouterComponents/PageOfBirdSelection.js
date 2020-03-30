import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import TopAppBar from '../components/TopAppBar'
import { makeStyles } from '@material-ui/core/styles';



function PageOfBirdSelection(props) {

    const birds = props.birdList;
    const useStyles = makeStyles(theme => ({

        bufferBar:{
            paddingTop: 80,
        },

    }));
    const classes = useStyles();

    const { setColorChoice, getColorChoice, ...rest } = props;

    function birdCardLoop(){
        var birdsArray = birds.map(birdItem => {
            return (
                <Grid item xs={12} sm={6} lg={4}>
                    <React.Fragment>
                        {birdItem.bird}
                        {birdItem.color}

                    </React.Fragment>
                </Grid>
            )
        });
        return birdsArray;
    }

    return (
        <React.Fragment>
            <TopAppBar title="Bird Type"></TopAppBar>
            <Typography className={classes.bufferBar} variant="h5" component="h2" align="center" gutterBottom={true} display="block">What bird did you see?</Typography>
            <Grid container
            direction="row"
            justify="space-evenly"
            alignItems="center" spacing={0}>
                {birdCardLoop()}
            </Grid>
        </React.Fragment>

        
    );
};

export default PageOfBirdSelection;