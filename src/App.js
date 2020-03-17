import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    this.setColorChoice('red');
    this.setSizeChoice('small');
    this.setBirdChoice('robin');
    this.setColorChoice('blue');
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload NEW.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
