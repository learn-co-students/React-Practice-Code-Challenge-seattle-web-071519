import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log('sushi props:', props)


  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => (props.eatSushi(props.currentSushi))}>
             {!props.currentSushi.isEaten ? <img src={props.currentSushi.img_url} width="100%" /> : <img src='' width="100%" />}      
      </div>
      <h4 className="sushi-details">
        {props.currentSushi.name} - ${props.currentSushi.price}
      </h4>
    </div>
  )
}

export default Sushi