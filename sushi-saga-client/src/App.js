import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    customerCash: 100,
    cashInput: 'Add Money'
  }

  increaseFunds = (e) => {
    e.preventDefault()
    this.setState({
      customerCash: this.state.customerCash + parseInt(this.state.cashInput)
    })
  }

  cashChange = (e) => {
    this.setState({cashInput: e.target.value})
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({
      sushis
    }))
  }

  passPlate = (price, id) => {
    if(this.state.eatenSushis.includes(id)) return

    if(this.state.customerCash >= price){
      this.setState({
        eatenSushis: [...this.state.eatenSushis, id],
        customerCash: this.state.customerCash - price
      })
    } else {
      alert('insufficient funds')
    }
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.increaseFunds}>
          <input type='text' value={this.state.cashInput} onChange={this.cashChange}/>
          <button type='submit'>Submit</button>
        </form>
        <SushiContainer sushis={this.state.sushis} eat={this.passPlate} eaten={this.state.eatenSushis} cash={this.state.customerCash}/>
        <Table eaten={this.state.eatenSushis} cash={this.state.customerCash}/>
      </div>
    );
  }
}

export default App;