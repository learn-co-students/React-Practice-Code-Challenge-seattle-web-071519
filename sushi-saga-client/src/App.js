import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      money: 100,
      sushiScroll: 0,
      tablePlates: []
    }
    this.fetchSushis()
  }

  moreSushi = () =>{
    this.setState({
      sushiScroll: this.state.sushiScroll === 96? 0 : this.state.sushiScroll + 4
    })
  }

  fetchSushis = () =>{
    fetch(API)
    .then(response => response.json())
    .then(response => {
      let newSoosh = response.map((sushi)=>{
        let sushiObj = {
        ...sushi,
        hasBeenEaten: false}
        return sushiObj
      })

      this.setState({
        sushis: newSoosh
      })
    })
  }

  moMoney = (value) =>{
    // event.preventDefault()
    let money = 1*this.state.money + 1*value
    this.setState({money: money})
  }

  eatDatSoosh = (eatenSushi) =>{
    if (this.state.money >= eatenSushi.price && !eatenSushi.hasBeenEaten){
      let alteredSushis = this.state.sushis.map(sushi =>{
      if (sushi.id === eatenSushi.id){
        sushi.hasBeenEaten = true
      }
      return sushi
    })

    this.setState({
      sushis: alteredSushis,
      tablePlates: [...this.state.tablePlates,"nom"],
      money: this.state.money - eatenSushi.price
    })
  }

  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer eatDatSoosh={this.eatDatSoosh} amtSushi={this.state.sushiScroll} onMoreSushi={this.moreSushi} sushis={this.state.sushis} />
        <Table amtMoney={this.state.money} plates={this.state.tablePlates} />
        <Wallet addMoney={this.moMoney}/>
      </div>
    );
  }
}

export default App;