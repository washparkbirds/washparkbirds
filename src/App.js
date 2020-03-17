import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PageOfStart from './RouterComponents/PageOfStart';
import PageOfSizeSelection from './RouterComponents/PageOfSizeSelection';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {color: 'blue', size: 'largest'};

    this.setColorChoice = this.setColorChoice.bind(this);
    this.setSizeChoice = this.setSizeChoice.bind(this);
    this.setBirdChoice = this.setBirdChoice.bind(this);
  }
  
  setColorChoice(colorChoice){
    this.setState({color : colorChoice});
  }

  setSizeChoice(sizeChoice){
    this.setState({size : sizeChoice});
  }

  setBirdChoice(birdChoice){
    this.setState({bird : birdChoice});
  }
  
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PageOfStart}/>
        <Route path="/size" exact render={(props) => <PageOfSizeSelection setSizeChoice={this.setSizeChoice} />} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
