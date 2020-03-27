import React from 'react';
import BirdSize from '../components/BirdSize';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import BottomNav from '../components/BottomNav';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';


function PageOfSizeSelection(props) {

    const useStyles = makeStyles(theme => ({
        root: {
        flexGrow: 1,
        },
    
        title: {
        flexGrow: 1,
        },
    }));

    const sizes = props.sizeList;
    const classes = useStyles();
    const history = useHistory();
    const { setSizeChoice, getSizeChoice} = props;



    function birdSizeLoop(){
        var sizesArray = sizes.map(size => {
            return (
                <Grid item xs={12} sm={8}>
                    <BirdSize chosenSize={size} key={size} getSizeChoice={getSizeChoice} setSizeChoice={setSizeChoice}></BirdSize>
                </Grid>
            )
        });
        return sizesArray;
    }
    
    //return <BirdSize setSizeChoice = {this.props.setSizeChoice}></BirdSize>;
  


    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="sticky">
                    <Toolbar>
                    <Button className={classes.title} color="inherit" onClick={() => history.goBack()}>Back</Button>

                    <Button className={classes.title} color="inherit">Restart</Button>

                    <Button className={classes.title} color="inherit" onClick={() => history.push('/color')} >Next</Button>
                    </Toolbar>
                </AppBar>
    </div>
        <Typography variant="h5" component="h2" align="center" gutterBottom={true} display="block">Please choose the bird's size:</Typography>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center" spacing={0}>
            {birdSizeLoop()}
        </Grid>
        <Link to="/color">Navigate To color Page</Link>
        </React.Fragment>
    );

};

export default PageOfSizeSelection;