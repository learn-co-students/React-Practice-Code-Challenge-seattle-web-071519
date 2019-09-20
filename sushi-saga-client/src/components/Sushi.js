import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {id, name, img_url, price, hasBeenEaten} = props.sushi



  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {props.eatDatSoosh(props.sushi)}}>
        {
          hasBeenEaten? 
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi