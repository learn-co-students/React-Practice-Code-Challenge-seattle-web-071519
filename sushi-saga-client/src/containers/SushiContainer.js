import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

    return (
    <Fragment>
      <div className="belt">
        
        { 
         
          props.sushi.map(sushi => {
            // console.log(sushi)
           return <Sushi singleSushi={sushi} eatSushi={props.eatSushi} />
          })
        }
        <MoreButton getSushi={props.getSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer