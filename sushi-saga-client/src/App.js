import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  //need to fetch sushi and store in state
  //need to keep track of where in the sushi list I am - store in state
  //store money here - don't track empty plates or the 4 sushi
     // that duplicates the data from the fetch - just pass all the sushi then parse data in the child components
  //note to self: don't try to write with async / await
  constructor() {
    super()
    this.state = {
      allSushi: [],
      currentIndex: 0,
      money: 200
    }

    fetch('http://localhost:3000/sushis')
      .then(response => response.json())
      .then(sushiData => this.setState({
        allSushi: sushiData.map(sushi => ({
          ...sushi, isEaten: false
        }))
      }))
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/sushis')
  //     .then(response => response.json())
  //     .then(sushiData => this.setState({
  //       allSushi: sushiData.map(sushi => ({
  //         ...sushi, isEaten: false
  //       }))
  //     }))
  // }

  eatSushi = (sushi) => {
    // debugger
    sushi.isEaten = true
    this.setState(prevState => {
      allSushi: [...prevState.allSushi, 
      ...sushi]
    }, () => this.deductMoney(sushi))
  }

  deductMoney = (sushi) => {
    // debugger
    let price = sushi.price
    this.setState(prevState => {
      // debugger
      if (prevState.money - price > 0) { 
      return {money: (prevState.money - price)}
      } else {
        null
      }
    }, () => console.log(this.state.money))
  }

  rotateSushiConveyorBelt = () => {
    //this handles if we get to the end of the conveyor belt
    // debugger
    this.setState(prevState => {
      if (prevState.currentIndex + 4 === 100) {
        // debugger
        return {currentIndex: 0}
      } else {
        return {currentIndex: prevState.currentIndex + 4}
      }
    }, () => console.log(this.state.currentIndex))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer onRotate={this.rotateSushiConveyorBelt} sushi={this.state.allSushi} index={this.state.currentIndex} onEatSushi={this.eatSushi}/>
        <Table money={this.state.money} sushi={this.state.allSushi}/>
      </div>
    );
  }
}

export default App;