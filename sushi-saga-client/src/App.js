import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state={
      sushiList: [],
      sushiScroll: 0,
      wallet: 100
    }
    this.findSushi()
  }

  eatSushi = (currentSushi) => {
    console.log('eatin a sushi')
    let newWallet = this.state.wallet - currentSushi.price
    if (newWallet < 0){
      return
    }
    let sushiList = this.state.sushiList.map(sushi => {
      return sushi.id === currentSushi.id ? {...sushi, isEaten: true} : sushi
    })
    this.setState({
      sushiScroll: this.state.sushiScroll, 
      sushiList: sushiList,
      wallet: newWallet
    })

    console.log(sushiList)

  }

  handleMoreSushi = () => {
    console.log('more sushi')
    let currentScroll = this.state.sushiScroll

    if (currentScroll + 4 === 100){
      this.setState({
        sushiScroll: 0
      })
    } else {
      this.setState({
        sushiScroll: currentScroll + 4
      })
    }
  }

  

  findSushi = () => {
    fetch(API)
      .then(response => response.json())
      .then(sushi => this.setState({
        sushiList: sushi.map(sushi => ({
          ...sushi, isEaten: false
        }))
      }))
  }



  render() {
    // {console.log('rendering app. sushiList: ', this.state.sushiList)}
    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList} handleMoreSushi={this.handleMoreSushi} sushiScroll={this.state.sushiScroll} eatSushi={this.eatSushi} />
        <Table sushiList={this.state.sushiList} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;