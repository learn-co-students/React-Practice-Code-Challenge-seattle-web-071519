import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi" onClick={ (event) => props.eatSushi(event)}>
      
      <div className="plate" 
           >
        { 
          props.singleSushi.isEaten === true ? null : <img id={props.singleSushi.id}src={props.singleSushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.singleSushi.name} - ${props.singleSushi.price}
      </h4>
    </div>
  )
}

export default Sushi