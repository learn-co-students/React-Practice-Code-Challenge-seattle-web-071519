import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushi: [],
      sushiIndex: 0,
      budget: 100,
      plates: []
    }
    this.getSushi()
  }

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      let selectedSushi = sushis.map(sushi=>
        ({...sushi, isEaten: false}))
        .slice(this.state.sushiIndex, this.state.sushiIndex+4)
      this.setState({
      allSushi: selectedSushi,
      sushiIndex: this.state.sushiIndex+=4
      // let selectedSushi = []
      // sushis.map(sushi=>({...sushi, isEaten: false}))
      // // console.log(sushis)
      // for (let i = this.state.sushiIndex; i < this.state.sushiIndex+4; i++){
      //   selectedSushi.push(sushis[i])
      // }
      // this.setState({
      //   allSushi: selectedSushi,
      //   sushiIndex: this.state.sushiIndex+=4
      // })
      })
      }
    )
  }

  eatSushi = (event) => {
    // console.log(event.target)
    let target = this.state.allSushi.filter(sushi=> sushi.id === parseInt(event.target.id))
    let newPlateCount = this.state.plates
    let updatedState = this.state.allSushi.map(sushi => {
      if(sushi.id === target[0].id){
        sushi.isEaten = true
        
        newPlateCount.push("1")
        // console.log(sushi)
      }
      // console.log(sushi)
      return sushi
    })
    this.setState({allSushi: updatedState})
    this.setState({plates: newPlateCount})
    // console.log(updatedState)
  }


  //   let selectedSushi = sushis.map(sushi=>({...sushi, isEaten: false})).slice(this.state.sushiIndex, this.state.sushiIndex+4)
  // this.setState({
  //   allSushi: selectedSushi,
  //   sushiIndex: this.state.sushiIndex+=4

  // getSushi = () => {
  //   fetch(API)
  //   .then(res => res.json())
  //   .then(sushis => {
  //      this.setState({
  //       allSushi: sushis.map(sushi=>({...sushi, isEaten: false})),
  //       sushiIndex: this.state.sushiIndex+=4
  //     })
  //   })
  // }

  render() {
    return (
      <div className="app">
        {/* {console.log(this.stat)} */}
        <SushiContainer sushi={this.state.allSushi} getSushi={this.getSushi} eatSushi={this.eatSushi}/>
        <Table plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;