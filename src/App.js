import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PageOfSizeSelection from './RouterComponents/PageOfSizeSelection';

const PageOfStart = () => {
  return <div>redd</div>;
};


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {color: null};

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
  
  componentDidMount(){
 
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
