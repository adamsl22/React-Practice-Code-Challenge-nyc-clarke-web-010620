import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    eatenSushis: [],
    customerCash: 100
  }

  passPlate = () => {
    this.state.eatenSushis << 'x'
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eat={this.passPlate} cash={this.state.customerCash}/>
        <Table eaten={this.state.eatenSushis} cash={this.state.customerCash}/>
      </div>
    );
  }
}

export default App;