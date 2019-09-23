import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    let currentFour = this.props.sushi
    currentFour = this.props.sushi.slice(this.props.index, (this.props.index + 4))
    console.log("current four sushi", currentFour)
    return (
        <div className="belt">
          {
            currentFour.map(sushi => {
              return <Sushi sushi={sushi} key={sushi.id} onEatSushi={this.props.onEatSushi}/>
            })
            /* 
               Render Sushi components here!
            */
          }
          <MoreButton onRotate={this.props.onRotate}/>
        </div>
    )

  }

}

export default SushiContainer