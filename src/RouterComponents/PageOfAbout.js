
import React from 'react';
import BirdSize from '../components/BirdSize';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import TopAppBar from '../components/TopAppBar';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WebIcon from '@material-ui/icons/Web';
import IconButton from '@material-ui/core/IconButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





function PageOfAbout(props) {

    const useStyles = makeStyles(theme => ({

        bufferBottom:{
            paddingBottom: 10,
        },
        logo:{
            maxWidth: '250px',
            marginBottom: 40,
        },

        aboutPaper:{
            maxWidth: '70%',
            margin: '0 auto',
            marginTop: 40,
            padding: 40,
            textAlign: 'left',
            marginBottom: 40,

        },
        grid:{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',

        },

        learnMore:{
            textWeight: 'bold',
        }

    }));

    const classes = useStyles();



    return (
        <React.Fragment>
            <TopAppBar title="About Us"></TopAppBar>
            <Paper className={classes.aboutPaper}elevation={3}>

                <Grid container direction="column" justify="space-evenly" alignItems="center">
                    <Grid item xs={12} sm={12} lg={12}>
                    <img className={classes.logo}src={"/images/WashPA Outdoors Co.png"} alt="Bird" ></img>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Typography variant="p" component="p">
                            WashPark Birds is a beginner-friendly bird identification application for Washington, PA's parks.
                            With the application, you can explore to see the many types of birds that visit Washington park!
                            The app was made for WashPA Outdoors Co., an organization dedicated to preserving Washington PA's local parks
                            by engaging the community with events, programming, and education.
                        </Typography>
                    </Grid>
                    <Grid className={classes.grid} item xs={12} sm={12} lg={12}>
                        <Typography className={classes.bufferBottom} variant="p" component="p">
                        Click an image below to learn more about WashPA Outdoors Co.:
                        </Typography>
                            <IconButton className={classes.bufferBottom} onClick={() => {window.location.href = 'https://www.facebook.com/washpaoutdoors/';}} edge="start" className={classes.menuButton} color="inherit" aria-label="About Us">
                                <FacebookIcon>Facebook</FacebookIcon>&nbsp;Facebook
                            </IconButton>
                            <IconButton className={classes.bufferBottom} onClick={() => {window.location.href = 'https://www.instagram.com/washpaoutdoors/';}} edge="start" className={classes.menuButton} color="inherit" aria-label="About Us">
                                <InstagramIcon></InstagramIcon>&nbsp;Instagram
                            </IconButton>
                            <IconButton onClick={() => {window.location.href = 'https://washpaoutdoors.wixsite.com/washpa';}} edge="start" className={classes.menuButton} color="inherit" aria-label="About Us">
                                <WebIcon></WebIcon>&nbsp;Website
                            </IconButton>
                    </Grid>
                    <Grid className={classes.grid} item xs={12} sm={12} lg={12}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Attributions:</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Special thanks to Dr. Sayre Greenfield and Lauren Conkle who created the document "Washington Park Birds: Washington, Pennsylvania A Checklist of Birds and their Seasonal Abundance" this provided the foundation for our dataset.
                            <br></br>
                            <br></br>
                            This app features three emoji images (red bird, parrot, turkey) part of the Twemoji project by Twitter, available under a Creative Commons 4.0 International license.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    </Grid>


                </Grid>
                </Paper>
            </React.Fragment>
    );

};

export default PageOfAbout;