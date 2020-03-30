import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageOfStart from './RouterComponents/PageOfStart';
import PageOfSizeSelection from './RouterComponents/PageOfSizeSelection';
import PageOfColorSelection from './RouterComponents/PageOfColorSelection';
import PageOfBirdSelection from './RouterComponents/PageOfBirdSelection';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      size: null,
      birdChoice: null,
      colorList: ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black', 'brown', 'white'],
      sizeList: ['small', 'medium', 'large'],
      birdList : [{bird: "robin", color: "red",}, {bird: "bluejay", color: "blue"}], //put json data array here
    };

    this.setColorChoice = this.setColorChoice.bind(this);
    this.setSizeChoice = this.setSizeChoice.bind(this);
    this.setBirdChoice = this.setBirdChoice.bind(this);
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

  getBirdChoice(birdChoice){
    return this.state.birdChoice
  }
  
  // add header about router?
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={PageOfStart}/>
        <Route path="/color" exact render={(props) => <PageOfColorSelection colorList={this.state.colorList} getColorChoice={this.getColorChoice} setColorChoice={this.setColorChoice} />} />
        <Route path="/size" exact render={(props) => <PageOfSizeSelection sizeList={this.state.sizeList} getSizeChoice={this.getSizeChoice} setSizeChoice={this.setSizeChoice} />} />
        <Route path="/bird" exact render={(props) => <PageOfBirdSelection birdList={this.state.birdList} getBirdChoice={this.getBirdChoice} setBirdChoice={this.setBirdChoice} />} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
