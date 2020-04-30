import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageOfStart from './RouterComponents/PageOfStart';
import PageOfSizeSelection from './RouterComponents/PageOfSizeSelection';
import PageOfColorSelection from './RouterComponents/PageOfColorSelection';
import PageOfBirdSelection from './RouterComponents/PageOfBirdSelection';
import PageOfBirdInfo from './RouterComponents/PageOfBirdInfo';
import PageOfAbout from './RouterComponents/PageOfAbout';




class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      size: null,
      bird: null,
      colorList: ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black', 'brown', 'white'],
      sizeList: ['small', 'medium', 'large'],
      birdList : [
        {name: "Canada Goose ",size: "large",spring: "true",summer: "false",fall: "true",winter: "false",color1: "brown",color2: "black",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Canada_Goose/id"},
        {name: "Mallard ",size: "large ",spring: "true",summer: "false",fall: "true",winter: "true",color1: "gray",color2: "blue",color3: "black",fcolor1: "gray",fcolor2: "blue",fcolor3: "black(when breeding males have a dark green head  and bright yellow bill",link: "https://www.allaboutbirds.org/guide/Mallard/id"},
        {name: "Wild Turkey ",size: "large",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "black",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Wild_Turkey/id"},
        {name: "Rock Pigeon ",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "blue",color3: "green",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Rock_Pigeon/id"},
        {name: "Mourning Dove ",size: "small",spring: "true",summer: "true",fall: "true",winter: "false",color1: "brown",color2: "yellow",color3: "black (spots)",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Mourning_Dove/id"},
        {name: "Yellow-billed Cuckoo ",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Yellow-billed_Cuckoo/id"},
        {name: "Black Billed Cuckoo ",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "red",fcolor1: "",fcolor2:"",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Black-billed_Cuckoo/id"},
        {name: "Common Nighthawk ",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "white",color3: "brown and black",fcolor1: "",fcolor2: "",folor3: "",link: "https://www.allaboutbirds.org/guide/Common_Nighthawk/id"},
        {name: "Chimney Swift ",size: "small",spring: "true",summer: "true",fall: "true",winter: "false",color1: "brown",color2: "gray",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link:"https://www.allaboutbirds.org/guide/Chimney_Swift/id"},
        {name: "Ruby-throated Hummingbird ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "green",color2: "red",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id"},
        {name: "Killdeer ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https:/www.allaboutbirds.org/guide/Killdeer/id"},
        {name: "Solitary Sandpiper ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link:"https://www.allaboutbirds.org/guide/Solitary_Sandpiper/id"},
        {name: "Great Blue Heron ",size: "large",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "blue",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Great_Blue_Heron/id"},
        {name: "Green Heron ",size: "medium ",spring: "false",summer: "true",fall: "false",winter: "false",color1: "blue",color2: "brown",color3: "green",fcolor1: "",fcolor2: "",fcolor3: "",link: "https:/www.allaboutbirds.org/guide/Green_Heron/id"},
        {name: "Turkey Vulture ",size: "large",spring: "false",summer: "true",fall: "true",winter: "false",color1: "brown",color2: "black",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Turkey_Vulture/id"},
        {name: "Sharp-shinned Hawk ",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "gray",color3: "white",fcolor1: "brown",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Sharp-shinned_Hawk/id"},
        {name: "Coopers Hawk ",size: "medium ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "gray",color3: "red",fcolor1: "white",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Coopers_Hawk/id"},
        {name: "Broad-winged Hawk ",size: "large ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "red",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Broad-winged_Hawk/id"},
        {name: "Red-tailed Hawk ",size: "large ",spring: "false",summer: "false",fall: "true",winter: "true",color1: "brown",color2: "black",color3: "orange",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Red-tailed_Hawk/id"},
        {name: "Eastern Screech Owl ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "red",color3: "brown",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Eastern_Screech-Owl/id"},
        {name: "Great Horned Owl",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "brown",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Great_Horned_Owl/id"},
        {name: "Barred Owl ",size: "medium",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Barred_Owl/id"},
        {name: "Belted Kingfisher ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "white",color3: "brown",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Belted_Kingfisher/id"},
        {name: "Red-bellied Woodpecker ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "black",color2: "white",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Red-bellied_Woodpecker/id"},
        {name: "Yellow-bellied Sapsucker ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "white",color3: "yellow",fcolor1: "red",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Yellow-bellied_Sapsucker/id"},
        {name: "Downy Woodpecker ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "white",color2: "black",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Downy_Woodpecker/id"},
        {name: "Hairy Woodpecker ",size: "small",spring: "false",summer: "false",fall: "true",winter: "true",color1: "black",color2: "white",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Hairy_Woodpecker/id"},
        {name: "Northern Flicker ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "black",color2: "white",color3: "red",fcolor1: "yellow",fcolor2: "brown",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Northern_Flicker/id"},
        {name: "Pileated Woodpecker",size: "medium",spring: "true",summer: "true",fall: "false",winter: "false",color1: "white",color2: "black",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Pileated_Woodpecker/id"},
        {name: "Great Crested Flycatcher",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "red",color2: "brown",color3: "gray",fcolor1: "yellow",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Great_Crested_Flycatcher/id"},
        {name: "Eastern Wood Pewee ",size: "small",spring: "false",summer: "true",fall: "false",winter: "false",color1: "gray",color2: "green",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Eastern_Wood-Pewee/id"},
        {name: "Acadian Flycatcher ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "green",color2: "white",color3: "brown",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Acadian_Flycatcher/id"},
        {name: "Least Flycatcher ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "green",color2: "brown",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Least_Flycatcher/id"},
        {name: "Eastern Phoebe ",size: "small",spring: "false",summer: "true",fall: "true",winter: "false",color1: "brown",color2: "gray",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Eastern_Phoebe/id"},
        {name: "White-eyed Vireo ",size: "small",spring: "true",summer: "false",fall: "false",winter: "false",color1: "",color2: "",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/White-eyed_Vireo/id"},
        {name: "Yellow-throated Vireo ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "black",color3: "gray",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Yellow-throated_Vireo/id"},
        {name: "Blue-headed Vireo ",size: "small",spring: "false",summer: "false",fall: "true",winter: "false",color1: "gray",color2: "green",color3: "yellow",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Blue-headed_Vireo/id"},
        {name: "Philadelphia Vireo ",size: "",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "green",color3: "yelow",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Philadelphia_Vireo/id"},
        {name: "Warbling Vireo ",size: "",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "green",color3: "yellow",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Warbling_Vireo/id"},
        {name: "Red-eyed Vireo ",size: "small",spring: "true",summer: "true",fall: "true",winter: "false",color1: "gray",color2: "green",color3: "yellow",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Red-eyed_Vireo/id"},
        {name: "Blue Jay ",size: "small ",spring: "true",summer: "true",fall: "true",winter: "true",color1: "blue",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/blue_jay/id"},
        {name: "American Crow ",size: "medium",spring: "true",summer: "true",fall: "true",winter: "true",color1: "black",color2: "",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/american_crow/id"},
        {name: "Rough-winged Swallow ",size: "small",spring: "true",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Rough-winged_swallow/id"},
        {name: "Barn Swallow ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "orange",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/barn_swallow/id"},
        {name: "Carolina Chickadee ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "gray",color2: "black",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/carolina_chickadee/id"},
        {name: "Tufted Titmouse ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "gray",color2: "white",color3: "brown",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/tufted_titmouse/id"},
        {name: "White-breasted Nuthatch ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "gray",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/white-breasted_nuthatch/id"},
        {name: "Red-breasted Nuthatch ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "orange",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/red-breasted_nuthatch/id"},
        {name: "Brown Creeper ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/brown_creeper/id"},
        {name: "House Wren ",size: "small",spring: "true",summer: "true",fall: "false",winter: "false",color1: "brown",color2: "black",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/house_wren/id"},
        {name: "Winter Wren ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "black",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/winter_wren/id"},
        {name: "Carolina Wren ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "brown",color2: "orange",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/carolina_wren/id"},
        {name: "Blue-gray Gnatcatcher ",size: "small ",spring: "true",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "gray",color3: "black",fcolor1: "white",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/blue-gray_gnatcatcher/id"},
        {name: "Golden-crowned Kinglet ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "green",color2: "gray",color3: "yellow",fcolor1: "orange",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/golden-crowned_kinglet/id"},
        {name: "Ruby-crowned Kinglet ",size: "small ",spring: "true",summer: "false",fall: "true",winter: "false",color1: "green",color2: "white",color3: "red",fcolor1: "black",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/ruby-crowned_kinglet/id"},
        {name: "Eastern Bluebird ",size: "small",spring: "true",summer: "false",fall: "false",winter: "true",color1: "blue",color2: "orange",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/eastern_bluebird/id"},
        {name: "Veery ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "orange",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/veery/id"},
        {name: "Gray-cheeked Thrush ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "white",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/gray-cheeked_thrush/id"},
        {name: "Swainsons Thrush ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/swainsons_thrush/id"},
        {name: "Hermit Thrush ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/hermit_thrush/id"},
        {name: "Wood Thrush ",size: "small",spring: "true",summer: "true",fall: "false",winter: "false",color1: "orange",color2: "brown",color3: "white",fcolor1: "red",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/wood_thrush/id"},
        {name: "American robin ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "black",color2: "orange",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/american_robin/id"},
        {name: "Gray Catbird ",size: "small",spring: "true",summer: "true",fall: "true",winter: "false",color1: "gray",color2: "blue",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Gray_Catbird/id"},
        {name: "Brown Thrasher ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "black",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Brown_Thrasher/id"},
        {name: "Northern Mockingbird ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "black",color3: "white",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Northern_Mockingbird/id"},
        {name: "European Starling ",size: "small ",spring: "true",summer: "true",fall: "true",winter: "true",color1: "purple",color2: "blue",color3: "green",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/European_Starling/id"},
        {name: "Cedar Waxwing ",size: "small",spring: "false",summer: "true",fall: "true",winter: "false",color1: "brown",color2: "gray",color3: "white",fcolor1: "yellow",fcolor2: "red",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Cedar_Waxwing/id"},
        {name: "House Sparrow ",size: "small",spring: "true",summer: "false",fall: "true",winter: "false",color1: "black",color2: "gray",color3: "brown",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/House_Sparrow/id"},
        {name: "House Finch ",size: "small",spring: "true",summer: "true",fall: "true",winter: "true",color1: "red",color2: "black",color3: "white",fcolor1: "brown",fcolor2: "white",fcolor3: "black",link: "https://www.allaboutbirds.org/guide/House_Finch/id"},
        {name: "Purple Finch ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "red",color2: "black",color3: "white",fcolor1: "brown",fcolor2: "white",fcolor3: "black",link: "https://www.allaboutbirds.org/guide/Purple_Finch/id"},
        {name: "American Goldfinch ",size: "small",spring: "true",summer: "true",fall: "true",winter: "false",color1: "yellow",color2: "black",color3: "brown",fcolor1: "yellow",fcolor2: "black",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/American_Goldfinch/id"},
        {name: "Eastern Towhee ",size: "small ",spring: "true",summer: "true",fall: "true",winter: "false",color1: "black",color2: "brown",color3: "white",fcolor1: "dark brown",fcolor2: "light brown ",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Eastern_Towhee/id"},
        {name: "Chipping Sparrow ",size: "small",spring: "true",summer: "true",fall: "false",winter: "false",color1: "brown",color2: "black",color3: "white",fcolor1: "females are similar ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Chipping_Sparrow/id"},
        {name: "Field Sparrow ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "white",color3: "red",fcolor1: "females are similar ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Field_Sparrow/id"},
        {name: "Fox Sparrow ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "white",color3: "gray",fcolor1: "females are similar ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Fox_Sparrow/id"},
        {name: "Song Sparrow ",size: "small ",spring: "true",summer: "true",fall: "true",winter: "true",color1: "brown",color2: "white and  black",color3: "black",fcolor1: "females are similar ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Song_Sparrow/id"},
        {name: "White-throated Sparrow ",size: "small ",spring: "true",summer: "false",fall: "true",winter: "true",color1: "black",color2: "white",color3: "brown",fcolor1: "yellow (on head)",fcolor2: "females are similar ",fcolor3: "",link: "https://www.allaboutbirds.org/guide/White-throated_Sparrow/id"},
        {name: "Dark-eyed Junco ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "true",color1: "gray",color2: "white",color3: "blue",fcolor1: "brown",fcolor2: "orange",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Dark-eyed_Junco/id"},
        {name: "Orchard Oriole ",size: "small ",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "red",color3: "",fcolor1: "yellow",fcolor2: "green",fcolor3: "gray",link: "https://www.allaboutbirds.org/guide/Orchard_Oriole/id"},
        {name: "Baltimore Oriole ",size: "small",spring: "false",summer: "true",fall: "false",winter: "false",color1: "black",color2: "orange",color3: "white",fcolor1: "orange",fcolor2: "black",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Baltimore_Oriole/id"},
        {name: "Red Wing Blackbird ",size: "small",spring: "true",summer: "true",fall: "false",winter: "false",color1: "black",color2: "red",color3: "yellow",fcolor1: "brown",fcolor2: "white",fcolor3: "black",link: "https://www.allaboutbirds.org/guide/Red-winged_Blackbird"},
        {name: "Brown Headed Cowbird ",size: "small",spring: "true",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "black",color3: "brown",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Brown-headed_Cowbird/id"},
        {name: "Common Grackle ",size: "small",spring: "true",summer: "true",fall: "false",winter: "false",color1: "black",color2: "purple",color3: "blue",fcolor1: "black",fcolor2: "purple",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Common_Grackle/id"},
        {name: "Ovenbird ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown/green",color2: "white",color3: "black",fcolor1: "females are the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Ovenbird/id"},
        {name: "Northern Waterthrush ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "brown",color2: "black",color3: "white and yellow",fcolor1: "females are the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Northern_Waterthrush/id"},
        {name: "Blue-winged Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "gray",color3: "white",fcolor1: "blue",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Blue-winged_Warbler/id"},
        {name: "Black-and-White Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "white",color3: "",fcolor1: "females have same color pattern",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Black-and-white_Warbler/id"},
        {name: "Tennessee Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "green",color3: "gray",fcolor1: "females are same color pattern",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Tennessee_Warbler/id"},
        {name: "Nashville Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "gray",color3: "red(spot on top of head)",fcolor1: "red",fcolor2: "gray",fcolor3: "black",link: "https://www.allaboutbirds.org/guide/Nashville_Warbler/id"},
        {name: "Kentucky Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "black",color3: "",fcolor1: "yellow",fcolor2: "black",fcolor3: "gray",link: "https://www.allaboutbirds.org/guide/Kentucky_Warbler/id"},
        {name: "Common Yellowthroat ",size: "small",spring: "true",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "brown",color3: "black",fcolor1: "brown",fcolor2: "yellow",fcolor3: "black",link: "https://www.allaboutbirds.org/guide/Common_Yellowthroat/id"},
        {name: "Hooded Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "yellow",color3: "gray",fcolor1: "yellow",fcolor2: "black",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Hooded_Warbler/id"},
        {name: "American Redstart ",size: "small",spring: "false",summer: "false",fall: "true",winter: "false",color1: "black",color2: "orange",color3: "white",fcolor1: "gray",fcolor2: "yellow",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/American_Redstart/id"},
        {name: "Cape May Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "black",color3: "red",fcolor1: "yellow",fcolor2: "black",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Cape_May_Warbler/id"},
        {name: "Cerulean Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "white",color3: "black",fcolor1: "blue/gray",fcolor2: "white",fcolor3: "black",link: "https://www.allaboutbirds.org/guide/Cerulean_Warbler/id"},
        {name: "Northern Parula Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "yellow",color3: "white",fcolor1: "gray",fcolor2: "yellow",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Northern_Parula/id"},
        {name: "Magnolia Warbler ",size: "small",spring: "false",summer: "false",fall: "true",winter: "false",color1: "black",color2: "white",color3: "yellow",fcolor1: "gray",fcolor2: "yellow",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Magnolia_Warbler/id"},
        {name: "Bay Breasted Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "white",color3: "red",fcolor1: "gray",fcolor2: "black",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Bay-breasted_Warbler/id"},
        {name: "Black Burnian Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "orange",color2: "black",color3: "white",fcolor1: "yellow",fcolor2: "black",fcolor3: "white",link: "https://www.allaboutbirds.org/guide/Blackburnian_Warbler/id"},
        {name: "Yellow Warbler ",size: "small",spring: "true",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "black",color3: "",fcolor1: "females are the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Yellow_Warbler/id"},
        {name: "Chestnut-sided Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "white",color2: "black",color3: "yellow",fcolor1: "red",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Chestnut-sided_Warbler/id"},
        {name: "Blackpoll Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "black",color2: "white",color3: "",fcolor1: "females are the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Blackpoll_Warbler/id"},
        {name: "Black Throated Blue Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "white",color3: "black",fcolor1: "brown",fcolor2: "gray",fcolor3: "green",link: "https://www.allaboutbirds.org/guide/Black-throated_Blue_Warbler/id"},
        {name: "Palm Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "brown",color3: "black",fcolor1: "females are the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Palm_Warbler/id"},
        {name: "Yellow-rumped Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "yellow",color3: "white",fcolor1: "black",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Yellow-rumped_Warbler/id"},
        {name: "Yellow-throated Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "white and  black",color3: "yellow",fcolor1: "females look similar ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Yellow-throated_Warbler/id"},
        {name: "Prairie Warbler",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "black",color3: "red",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Prairie_Warbler/id"},
        {name: "Black-throated Green Warbler ",size: "small",spring: "false",summer: "false",fall: "true",winter: "false",color1: "yellow",color2: "black",color3: "white",fcolor1: "females are basically the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Black-throated_Green_Warbler/id"},
        {name: "Canada Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "gray",color2: "yellow",color3: "black",fcolor1: "females are basically the same ",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Canada_Warbler/id"},
        {name: "Wilsons Warbler ",size: "small",spring: "false",summer: "false",fall: "false",winter: "false",color1: "yellow",color2: "black",color3: "",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Wilsons_Warbler/id"},
        {name: "Scarlet Tanager ",size: "small ",spring: "true",summer: "true",fall: "false",winter: "false",color1: "red",color2: "black",color3: "",fcolor1: "yellow",fcolor2: "brown",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Scarlet_Tanager/id"},
        {name: "Northern Cardinal ",size: "small ",spring: "true",summer: "true",fall: "true",winter: "true",color1: "red",color2: "black",color3: "",fcolor1: "brown",fcolor2: "red",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Northern_Cardinal/id"},
        {name: "Rose-breasted Grosbeak ",size: "small ",spring: "true",summer: "false",fall: "false",winter: "false",color1: "blue",color2: "white",color3: "red",fcolor1: "brown",fcolor2: "white",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Rose-breasted_Grosbeak/id"},
        {name: "Indigo Bunting ",size: "small",spring: "true",summer: "true",fall: "false",winter: "false",color1: "blue",color2: "brown",color3: "Immature bird is spotty blue and brown ",fcolor1: "",fcolor2: "",fcolor3: "",link: "https://www.allaboutbirds.org/guide/Indigo_Bunting/id"}
        ], //put json data array here
    };

    this.setColorChoice = this.setColorChoice.bind(this);
    this.setSizeChoice = this.setSizeChoice.bind(this); 
    this.setBirdChoice = this.setBirdChoice.bind(this);
    this.getBirdChoice = this.getBirdChoice.bind(this);
    this.getSizeChoice = this.getSizeChoice.bind(this);
    this.getColorChoice = this.getColorChoice.bind(this);

  }
  
  setColorChoice(colorChoice){
    this.setState({color : colorChoice});
  }

  getColorChoice(){
    return this.state.color;
  }

  setSizeChoice(sizeChoice){
    this.setState({size : sizeChoice});
  }

  getSizeChoice(){
    return this.state.size;
  }

  setBirdChoice(birdChoice){
    this.setState({bird : birdChoice});
  }

  getBirdChoice(){
    return this.state.bird;
  }
  
  // add header about router?
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={PageOfStart}/>
        <Route path="/color" exact render={(props) => <PageOfColorSelection colorList={this.state.colorList} getColorChoice={this.getColorChoice}  getSizeChoice={this.getSizeChoice} setColorChoice={this.setColorChoice} />} />
        <Route path="/size" exact render={(props) => <PageOfSizeSelection sizeList={this.state.sizeList} getSizeChoice={this.getSizeChoice} setSizeChoice={this.setSizeChoice} />} />
        <Route path="/bird" exact render={(props) => <PageOfBirdSelection birdList={this.state.birdList} getBirdChoice={this.getBirdChoice} getSizeChoice={this.getSizeChoice} setBirdChoice={this.setBirdChoice} getColorChoice={this.getColorChoice} />} />
        <Route path="/birdInfo" exact render={(props) => <PageOfBirdInfo birdList={this.state.birdList} getBirdChoice={this.getBirdChoice} getSizeChoice={this.getSizeChoice}/>}/>
        <Route path="/about" exact render={(props) => <PageOfAbout birdList={this.state.birdList} getBirdChoice={this.getBirdChoice} getSizeChoice={this.getSizeChoice}/>}/>

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
