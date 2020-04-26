import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageOfStart from './RouterComponents/PageOfStart';
import PageOfSizeSelection from './RouterComponents/PageOfSizeSelection';
import PageOfColorSelection from './RouterComponents/PageOfColorSelection';
import PageOfBirdSelection from './RouterComponents/PageOfBirdSelection';
import PageOfBirdInfo from './RouterComponents/PageOfBirdInfo';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      size: null,
      bird: null,
      colorList: ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black', 'brown', 'white'],
      sizeList: ['small', 'medium', 'large'],
      birdList : [{bird: "robin", color: "red", size: "small", spring: true}, {bird: "bluejay", color: "blue", size: "small", spring: true, link: "https://www.allaboutbirds.org/guide/blue_jay/id"}, {bird: "blue sparrow", color: "blue", size: "small", spring: false}, {bird: "blue", color: "blue", size: "small", spring: true}, {bird: "redjay", color: "red", size: "small", spring: true}], //put json data array here
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
        <Route path="/bird" exact render={(props) => <PageOfBirdSelection birdList={this.state.birdList} getBirdChoice={this.getBirdChoice} getSizeChoice={this.getSizeChoice} setBirdChoice={this.setBirdChoice} getColorChoice={this.getColorChoice} getSizeChoice={this.getSizeChoice} />} />
        <Route path="/birdInfo" exact render={(props) => <PageOfBirdInfo birdList={this.state.birdList} getBirdChoice={this.getBirdChoice} getSizeChoice={this.getSizeChoice}/>}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
