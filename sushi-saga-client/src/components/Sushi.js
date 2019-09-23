import React, { Component } from 'react'

class Sushi extends Component {
  constructor(props) {
    super(props)

  }

  handleClickPlate = () => {
    // console.log(props)
    this.props.onEatSushi(this.props.sushi)
  }
  render() {
    let { name, img_url, price, id, isEaten } = this.props.sushi

      return (
        <div className="sushi">
          <div className="plate" 
               onClick={this.handleClickPlate}>
            {isEaten ? null : <img src={img_url} width="100%"></img>
    
              /* Tell me if this sushi has been eaten! */ 
              /* isEaten ?
                 null
              :
                <img src={img_url} width="100%" /> */
            }
          </div>
          <h4 className="sushi-details">
            {name} - ${price}
          </h4>
        </div>
      )

  }
  
}

export default Sushi