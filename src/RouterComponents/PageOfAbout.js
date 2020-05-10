
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
        flexCol:{
            display: 'flex',
            flexDirection: 'column',
        },
        typMargin:{
            marginBottom: '1em',
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
                        <Typography>
                            WashPark Birds is a beginner-friendly bird identification application for Washington, PA's parks.
                            With the application, you can explore to see the many types of birds that visit Washington park!
                            The app was made for WashPA Outdoors Co., an organization dedicated to preserving Washington PA's local parks
                            by engaging the community with events, programming, and education.
                        </Typography>
                    </Grid>
                    <Grid className={classes.grid} item xs={12} sm={12} lg={12}>
                        <Typography className={classes.bufferBottom}>
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
                        <Typography className={classes.heading}>Credits and Attributions:</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Special thanks and credit to Dr. Sayre Greenfield, Professor of English, University of Pittsburgh at Greensburg, and Lauren Conkle who created the document "Washington Park Birds: Washington, Pennsylvania A Checklist of Birds and their Seasonal Abundance" that provided the foundation for our dataset for the app.
                            <br></br>
                            <br></br>
                            This app features three emoji images (red bird, parrot, turkey) that are part of the Twemoji project by Twitter, available under a Creative Commons 4.0 International <br></br>License.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Image Credits and Attributions:</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.flexCol}>
                            <Typography>
                            Canada Goose 
                            <br></br>Author: USFWS Mountain-Prairie
                            <br></br>Source: Canada goose on Seedskadee NWR
                            <br></br>License: Creative Commons Attribution 2.0 Generic 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Canada_goose_on_Seedskadee_NWR_(27826185489).jpg
                            </Typography>
                            <br></br>
                            <Typography>
                            Mallard 
                            <br></br>Author: Richard Bartz 
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 2.5 Generic 
                            <br></br>Website:
                            https://en.wikipedia.org/wiki/File:Anas_platyrhynchos_male_female_quadrat.jpg</Typography><br></br><Typography className={classes.typMargin}>
                        

                            Wild Turkey
                            <br></br>Author: Dimus 
                            <br></br>Source: English Wikipedia 
                            <br></br>License: public domain by its <br></br>Author, Dimus </Typography><br></br><Typography className={classes.typMargin}>

                            Rock Pigeon
                            <br></br>Author: Diego Delso
                            <br></br>Source: own work
                            <br></br>License: <br></br>License CC BY-SA
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Paloma_brav%C3%ADa_(Columba_livia),_Palacio_de_Nymphenburg,_M%C3%BAnich,_Alemania01.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Mourning Dove:
                            <br></br>Author: http://www.naturespicsonline.com/
                            <br></br>Source: http://www.naturespicsonline.com/galleries/Nature15/_mg_8449a.htm
                            <br></br>License: Creative Commons Attribution-Share Alike 2.5 Generic
                            <br></br>Website: 
                            https://commons.wikimedia.org/wiki/File:Mourning_Dove_2006.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Yellow-Billed Cuckoo
                            <br></br>Author:  Factumquintus 
                            <br></br>Source: Own Work
                            <br></br>License: GNU Free Documentation <br></br>License,  Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: 
                            https://commons.wikimedia.org/wiki/File:Coccyzus-americanus-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Black Billed Cuckoo
                            <br></br>Author: Wolfgang Wander
                            <br></br>Source: http://www.pbase.com/wwcsig/image/43413771
                            <br></br>License: Licenced under CC-By-SA-2.5
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Black-billed-cuckoo2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Common Nighthawk
                            <br></br>Author: Andy Reago and Chrissy McClarren
                            <br></br>Source: Common Nighthawk
                            <br></br>License: Creative Commons Attribution 2.0 Generic 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Common_Nighthawk_(14428313550).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Chimney Swift 
                            <br></br>Author: Jim McCulloch
                            <br></br>Source: Flickr: Chimney swift overhead
                            <br></br>License: Creative Commons Attribution 2.0 Generic 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Chimney_swift_overhead.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Ruby-throated Hummingbird 
                            <br></br>Author: Steve Maslowski
                            <br></br>Source: U.S. Fish and Wildlife Service Digital Library System
                            <br></br>License: Creative Commons Attribution 2.0 Generic 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Rubythroathummer65.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Killdeer
                            <br></br>Author: Alan D. Wilson
                            <br></br>Source: naturespicsonline.com
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Killdeer.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Solitary Sandpiper
                            <br></br>Author: Wikipedia Public Domain
                            <br></br>Source: public domain 
                            <br></br>License: Public Domain of Wikipedia 
                            <br></br>Website: https://en.wikipedia.org/wiki/File:Solitarysandpiper.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Great Blue Heron
                            <br></br>Author: Terry Foote
                            <br></br>Source: Own work by the original uploader
                            <br></br>License: Creative Commons Attribution 2.0 Generic 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:GBHfish5.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Green Heron 
                            <br></br>Author: Basar
                            <br></br>Source: Own Work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Butorides_virescens2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Turkey Vulture 
                            <br></br>Author: Don Debold
                            <br></br>Source: Vulture Landing on Dead Tree Branch
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Cathartes_aura_-Santa_Teresa_County_Park,_San_Jose,_California,_USA_-adult-8a.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Sharp-shinned Hawk 
                            <br></br>Author: ALAN SCHMIERER
                            <br></br>Source: 216 - SHARP-SHINNED HAWK (11-30-08) canet rd, slo, ca 
                            <br></br>License: Creative Commons CC0 1.0 Universal Public Domain Dedication
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Accipiter_striatus,_Canet_Road,_San_Luis_Obispo_1.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Coopers Hawk 
                            <br></br>Author: USFWS Mountain-Prairie
                            <br></br>Source: Cooper's Hawk on Seedskadee National Wildlife Refuge
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Cooper%27s_Hawk_on_Seedskadee_National_Wildlife_Refuge_(26108620533).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Broad-winged Hawk 
                            <br></br>Author: Original uploader was JulieFromVT (Julie Waters) at en.wikipedia
                            <br></br>Source: Transferred from en.wikipedia to Commons.
                            <br></br>License: GNU Free Documentation <br></br>License,  Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Julie_Waters_broad_winged_hawk.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Red-tailed Hawk
                            <br></br>Author: Mark Bohn of U.S. Fish and Wildlife Service Northeast Region
                            <br></br>Source: Red-tailed Hawk-- Snowmanradio
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Buteo_jamaicensis_-John_Heinz_National_Wildlife_Refuge_at_Tinicum,_Pennsylvania,_USA-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Eastern Screech Owl
                            <br></br>Author: Wolfgang Wander
                            <br></br>Source: Own work, http://www.pbase.com/image/58326162
                            <br></br>License: GNU Free Documentation <br></br>License,  Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Eastern_Screech_Owl.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Great Horned Owl
                            <br></br>Author: Greg Hume
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Bubo_virginianus_06.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Barred Owl 
                            <br></br>Author:  Mdf
                            <br></br>Source: Mdf
                            <br></br>License: GNU Free Documentation <br></br>License,  Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Strix-varia-005.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Belted Kingfisher
                            <br></br>Author: Kevin Cole
                            <br></br>Source: Belted Kingfisher (Megaceryle alcyon)
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Belted_Kingfisher.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Red-bellied Woodpecker 
                            <br></br>Author: Ken Thomas
                            <br></br>Source: KenThomas.us
                            <br></br>License: public domain 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Red-bellied_Woodpecker-27527.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Yellow-bellied Sapsucker
                            <br></br>Author: dominic sherony
                            <br></br>Source: Yellow-bellied Sapsucker
                            <br></br>License:Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Sphyrapicus_varius.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Downy Woodpecker 
                            <br></br>Author: Wolfgang Wander
                            <br></br>Source: self-made / http://www.pbase.com/wwcsig/image/77075634
                            <br></br>License: GNU Free Documentation <br></br>License,  Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Downy_Woodpecker01.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Hairy Woodpecker
                            <br></br>Author: User:Mdf
                            <br></br>Source: Own work
                            <br></br>License: GNU Free Documentation <br></br>License,  Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Picoides-villosus-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Northern Flicker 
                            <br></br>Author: Nature's Pic's (www.naturespicsonline.com)
                            <br></br>Source: http://www.naturespicsonline.com/
                            <br></br>License: Nature's Pic's (www.naturespicsonline.com)
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Northern_Flicker.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Pileated Woodpecker 
                            <br></br>Author: Joshlaymon
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:PileatedWoodpeckerFeedingonTree,_crop.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Great Crested Flycatcher 
                            <br></br>Author: Charles J Sharp
                            <br></br>Source: Own work, from Sharp Photography, sharpphotography.co.uk
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Great_crested_flycatcher_(Myiarchus_crinitus).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Eastern Wood Pewee
                            <br></br>Author: Jim Conrad 
                            <br></br>Source: JIM CONRAD'S NATURALIST NEWSLETTER
                            <br></br>License:This work has been released into the public domain by its <br></br>Author, Jim Conrad
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Eastern_Peewee-Yucat%C3%A1n.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Acadian Flycatcher 
                            <br></br>Author: Tnolley
                            <br></br>Source: Own Work
                            <br></br>License: I, the copyright holder of this work, release this work into the public domain
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Acadian_Flycatcher.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Least Flycatcher 
                            <br></br>Author: User:Mdf
                            <br></br>Source: Self-made work
                            <br></br>License:Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation <br></br>License, Version 1.2 
                            Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Empidonax-minimus-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Eastern Phoebe 
                            <br></br>Author: john Benson
                            <br></br>Source: Flickr: Flycatcher
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Sayornis_phoebe_-Owen_Conservation_Park,_Madison,_Wisconsin,_USA-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            White-eyed Vireo
                            <br></br>Author: Needsmoreritalin
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:WhiteEyedVireoMaine.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Yellow-throated Vireo
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: Flickr: Yellow-throated Vireo
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Yellow-throated_Vireo_by_Dan_Pancamo_1.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Blue-headed Vireo 
                            <br></br>Author: Andy Reago and Chrissy McClarren
                            <br></br>Source: Blue-headed Vireo
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Blue-headed_Vireo_(8088895251).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Philadelphia Vireo
                            <br></br>Author: brian_mcclure0422
                            <br></br>Source: Philadelphia Vireo1
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Vireo_philadelphicus.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Warbling Vireo
                            <br></br>Author: Gary L. Clark
                            <br></br>Source: Own Work
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Warbling_vireo.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Red-eyed Vireo
                            <br></br>Author: John Benson
                            <br></br>Source: Red-eyed Vireo
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Vireo_olivaceus_-Madison_-Wisconsin_-USA-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Blue Jay
                            <br></br>Author: Mdf
                            <br></br>Source: Own Work
                            <br></br>License: Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation <br></br>License, Version 1.2
                            Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Cyanocitta-cristata-004.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            American Crow 
                            <br></br>Author: Mdf
                            <br></br>Source: Own Work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Corvus-brachyrhynchos-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Rough-winged Swallow 
                            <br></br>Author: Basar
                            <br></br>Source: Own Work 
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Stelgidopteryx_serripennis.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Barn Swallow 
                            <br></br>Author: Malene Thyssen
                            <br></br>Source: Own Work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Landsvale.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Carolina Chickadee
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: Flickr: Carolina Chickadee
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Carolina_Chickadee1_by_Dan_Pancamo.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Tufted Titmouse
                            <br></br>Author: Basar
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Baeolophus_bicolor_15.jpeg</Typography><br></br><Typography className={classes.typMargin}>

                            White-breasted Nuthatch
                            <br></br>Author: Mdf 
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Sitta-carolinensis-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Red-breasted Nuthatch 
                            <br></br>Author: Cephas
                            <br></br>Source: Own Work 
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Sitta_canadensis_CT2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Brown Creeper 
                            <br></br>Author: Mdf 
                            <br></br>Source: Own work
                            <br></br>License:Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Certhia-americana-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            House Wren 
                            <br></br>Author: S. King, US NPS
                            <br></br>Source: US NPS
                            <br></br>License: Public Domain of National Park Service 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Troglodytes_aedon_NPS.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Winter Wren
                            <br></br>Author: Paul Stein
                            <br></br>Source: Winter Wren
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Troglodytes_hiemalis_Central_Park_NY.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Carolina Wren 
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: Flickr: Carolina Wren
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Carolina_Wren1.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Blue-gray Gnatcatcher 
                            <br></br>Author: Francesco Veronesi
                            <br></br>Source: Blue-gray Gnatcatcher - Cuba_S4E0108
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Blue-gray_Gnatcatcher_-_Cuba_S4E0108_(19293820712).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Golden-crowned Kinglet 
                            <br></br>Author: Pete
                            <br></br>Source: originally posted to Flickr as golden_crowned_kinglet_6122
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Golden_crowned_kinglet_6122.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Eastern Bluebird 
                            <br></br>Author: Sandysphotos2009
                            <br></br>Source: Snowmanradio
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website:  https://commons.wikimedia.org/wiki/File:Sialia_sialis_-Michigan,_USA_-pair-8c.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Veery
                            <br></br>Author: Cephas
                            <br></br>Source: Own work 
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Catharus_fuscescens_CT.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Gray-cheeked Thrush 
                            <br></br>Author: Dave Menke
                            <br></br>Source: originates from the National Digital Library of the United States Fish and Wildlife Service
                            <br></br>License: Public Domain of  U.S. Fish and Wildlife Service
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Graycheekedthrush36.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Swansons Thrush 
                            <br></br>Author: TonyCastro
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Swainson%E2%80%99s_Thrush.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Hermit Thrush
                            <br></br>Author: Matt MacGillivray
                            <br></br>Source: Flickr: hermit in the park
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Hermit_thrush_qmnonic.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Wood Thrush 
                            <br></br>Author: Steve Maslowski, US Fish and Wildlife Service
                            <br></br>Source: Derivative work of Hylocichla_mustelina.jpg
                            <br></br>License: Public Domain of U.S. Fish and Wildlife Service
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Hylocichla_mustelina_(cropped).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            American Robin
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Turdus-migratorius-002.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Gray Catbird
                            <br></br>Author: Hari Krishnan
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Gray_Catbird_(Dumetella_carolinensis).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Brown Thrasher
                            <br></br>Author: Manjith Kainickara
                            <br></br>Source: Brown Thrasher
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Toxostoma_rufum_-Garland,_Texas,_USA-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Northern Mockingbird
                            <br></br>Author: Captain-tucker
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Mimus_polyglottos_adult_02_cropped.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            European Starling
                            <br></br>Author: PierreSelim
                            <br></br>Source: Own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Toulouse_-_Sturnus_vulgaris_-_2012-02-26_-_3.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Cedar Waxwing
                            <br></br>Author: Judy Gallagher
                            <br></br>Source: https://www.flickr.com/photos/52450054@N04/39997434862/
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Cedar_Waxwing_-_Bombycilla_cedrorum,_George_Washington%27s_Birthplace_National_Monument,_Colonial_Beach,_Virginia_(39997434862).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            House Sparrow
                            <br></br>Author: Adamo
                            <br></br>Source: http://www.piqs.de/fotos/121272.html
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Passer_domesticus_male_(15).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Purple Finch
                            <br></br>Author: Cephas
                            <br></br>Source: Own work
                            <br></br>License: CC BY-SA 3.0
                            <br></br>Website:https://en.wikipedia.org/wiki/Purple_finch#/media/File:Carpodacus_purpureus_CT3.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            House Finch
                            <br></br>Author: John Benson 
                            <br></br>Source: Another House Finch
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Carpodacus_mexicanus_-Madison,_Wisconsin,_USA-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            American Goldfinch
                            <br></br>Author: Breck22
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Male_American_Goldfinch_in_Lodi_CA.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Eastern Towhee 
                            <br></br>Author: Bill Thompson
                            <br></br>Source: https://www.flickr.com/photos/usfwsnortheast/5754918156/
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Pipilo_erythrophthalmus_-Quabbin_Reservoir,_Massachusetts,_USA_-male-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Chipping Sparrow
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Spizella-passerina-015_edit.jpg</Typography><br></br><Typography className={classes.typMargin}>
                            
                            Field Sparrow
                            <br></br>Author: PookieFugglestein
                            <br></br>Source: own work
                            <br></br>License: CC0
                            <br></br>Website: https://en.wikipedia.org/wiki/Field_sparrow#/media/File:Field_sparrow_head.JPG</Typography><br></br><Typography className={classes.typMargin}>

                            Fox sparrow
                            <br></br>Author:  Factumquintus
                            <br></br>Source: unknown
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Passerella_iliaca-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            White-Throated Sparrow
                            <br></br>Author: Cephas
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Zonotrichia_albicollis_CT1.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Dark-eyed Junco
                            <br></br>Author: Cephas
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Junco_hyemalis_hyemalis_CT2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Orchard Oriole
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: Orchard Oriole
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Orchard_Oriole_by_Dan_Pancamo_1.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Baltimore Oriole
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://en.wikipedia.org/wiki/Baltimore_oriole#/media/File:Icterus-galbula-002.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Red-winged blackbird
                            <br></br>Author: Walter Siegmund 
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Agelaius_phoeniceus_0110_taxo.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Brown headed cowbird 
                            <br></br>Author: Bear golden retriever 
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Molothrus_ater_2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Common Grackle
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Quiscalus-quiscula-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Ovenbird
                            <br></br>Author: Dick Daniel
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Ovenbird_RWD2011b.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Northern waterthrush
                            <br></br>Author: Bill Boutton
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Northern_Waterthrush,_Parkesia_noveboracensis.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Blue-winged warbler
                            <br></br>Author: Ken Janes
                            <br></br>Source: https://www.flickr.com/photos/kenjanes/9220983215/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Vermivora_cyanoptera_-North_Berwick,_Maine,_USA-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Black and white warbler
                            <br></br>Author: Wolfgang Wander
                            <br></br>Source: own work, http://www.pbase.com/image/50482946
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Black-and-white_Warbler.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Tennessee warbler
                            <br></br>Author: Jerry Oldenettel
                            <br></br>Source: https://www.flickr.com/photos/7457894@N04/2308452558
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Tennessee_Warbler_2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Nashville warbler
                            <br></br>Author: Dave Menke
                            <br></br>Source: https://digitalmedia.fws.gov/cdm/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Vermivora_ruficapilla_Winema_National_Forest_(cropped).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Kentucky warbler
                            <br></br>Author: U.S. Fish and Wildlife Service
                            <br></br>Source: https://images.fws.gov/default.cfm?fuseaction=records.display&CFID=3996727&CFTOKEN=36367746&id=61158301-1A71-4A3F-8B79BDDC8F01D116
                            <br></br>License: https://faq.fws.gov/imagefaq.html
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Oporornis_formosus_FWS.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Common Yellowthroat
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: Common Yellowthroat
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Common_Yellowthroat_by_Dan_Pancamo.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Hooded warbler
                            <br></br>Author: The Lilac Breasted Roller
                            <br></br>Source: https://www.flickr.com/photos/26616866@N00/67483709/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Wilsonia_citrina_(Belize).jpg</Typography><br></br><Typography className={classes.typMargin}>

                            American Redstart
                            <br></br>Author:  Dennis Jarvis
                            <br></br>Source: https://www.flickr.com/photos/archer10/2214413802/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Setophaga_ruticilla_-Chiquimula,_Guatemala_-male-8-4c.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Cape May Warbler
                            <br></br>Author: United States Fish and Wildlife Service Headquarters
                            <br></br>Source: https://www.flickr.com/photos/usfwshq/13887020270/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Dendroica_tigrina_FWS.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Cerulean Warbler
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Dendroica-cerulea-002.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Northern Parula Warbler
                            <br></br>Author: https://en.wikipedia.org/wiki/User:Albuttlee
                            <br></br>Source: own work
                            <br></br>License: has been released to public for all uses
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Northernparalua20.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Magnolia Warbler
                            <br></br>Author: Cephas
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Dendroica_magnolia_MN.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Bay-breasted Warbler
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Dendroica-castanea-001.jpg</Typography><br></br><Typography className={classes.typMargin}>


                            Black Burnian Warbler
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Dendroica-fusca-001.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Yellow Warbler
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Dendroica-aestiva-001.jpg</Typography><br></br><Typography className={classes.typMargin}>


                            Chestnut sided Warbler
                            <br></br>Author: mdf
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Dendroica-pensylvanica-003.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Blackpoll Warbler
                            <br></br>Author: Cephas
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Dendroica_striata_MN.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Black-throated Warbler
                            <br></br>Author: Gary Irwin
                            <br></br>Source: Black-Throated Blue Warbler
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic 
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Black-Throated_Blue_Warbler.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Palm Warbler
                            <br></br>Author: Tony Clements
                            <br></br>Source: Tony Clements
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:A_palm_warbler.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Yellow rumped warbler
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: https://www.flickr.com/photos/10017367@N03/5234713765
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Myrtle_Warbler_-_Houston,_TX_2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Yellow throated warbler
                            <br></br>Author: dominic sherony
                            <br></br>Source: https://www.flickr.com/photos/9765210@N03/3204314410/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Yellow-throated_Warbler_2.jpg</Typography><br></br><Typography className={classes.typMargin}>
                            Yellow throated warbler
                            <br></br>Author: dominic sherony
                            <br></br>Source: https://www.flickr.com/photos/9765210@N03/3204314410/
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website:https://commons.wikimedia.org/wiki/File:Yellow-throated_Warbler_2.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Prairie Warbler
                            <br></br>Author: Charles J Sharp
                            <br></br>Source: http://www.sharpphotography.co.uk/
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Prairie_warbler_(Setophaga_discolor_paludicola)_male_J.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Black throated green Warbler
                            <br></br>Author: https://www.flickr.com/photos/15512543@N04/
                            <br></br>Source: https://www.flickr.com/photos/15512543@N04/2516296228/
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:BlackthroatedGreenWarbler08.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Canada Warbler
                            <br></br>Author: William H Majoros
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 3.0 Unported
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:8G7D5475-Canada.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Wilson’s Warbler
                            <br></br>Author: Michael Woodruff
                            <br></br>Source: https://www.flickr.com/photos/38972116@N00/26107945/
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Wilsonia_pusilla.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Scarlet Tanager
                            <br></br>Author:  BMajoros
                            <br></br>Source: own work
                            <br></br>License: Creative Commons Attribution-Share Alike 4.0 International
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:7Z1E5997a.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Northern Cardinal
                            <br></br>Author:  Craig ONeal
                            <br></br>Source: https://www.flickr.com/photos/craigoneal/11034100516/
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Cardinalis_cardinalis_-Florida,_USA_-female-8.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Rose-breasted grosbeak
                            <br></br>Author:  https://www.flickr.com/photos/15512543@N04/
                            <br></br>Source: https://www.flickr.com/photos/15512543@N04/2488560129/
                            <br></br>License: Creative Commons Attribution 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:RosebreastedGrosbeak08.jpg</Typography><br></br><Typography className={classes.typMargin}>

                            Indigo Bunting
                            <br></br>Author: Dan Pancamo
                            <br></br>Source: https://www.flickr.com/photos/10017367@N03/5649310951
                            <br></br>License: Creative Commons Attribution-Share Alike 2.0 Generic
                            <br></br>Website: https://commons.wikimedia.org/wiki/File:Indigo_Bunting_Female_by_Dan_Pancamo_1.jpg</Typography><br></br><Typography className={classes.typMargin}>

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