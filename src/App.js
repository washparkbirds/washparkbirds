import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
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
      colorList: ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black', 'brown', 'white'],
      sizeList: ['small', 'medium', 'large'],
      /*birdList : resultsOfBirdLoop,*/
    };

    this.setColorChoice = this.setColorChoice.bind(this);
    this.setSizeChoice = this.setSizeChoice.bind(this);
    this.setBirdChoice = this.setBirdChoice.bind(this);

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

  setBirdChoice(birdChoice){
    this.setState({bird : birdChoice});
  }
  
  // add header about router?
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PageOfStart}/>
        <Route path="/size" exact render={(props) => <PageOfSizeSelection setSizeChoice={this.setSizeChoice} />} />
        <Route path="/color" exact render={(props) => <PageOfColorSelection colorList={this.state.colorList} getColorChoice={this.getColorChoice} setColorChoice={this.setColorChoice} />} />
        <Route path="/bird" exact render={(props) => <PageOfBirdSelection getBirdChoice={this.getBirdChoice} setBirdChoice={this.setBirdChoice} />} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
