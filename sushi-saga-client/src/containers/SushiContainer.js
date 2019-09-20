import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let amtSushi = props.amtSushi
  let sushis = props.sushis.map((sushi,index) => (<Sushi eatDatSoosh={props.eatDatSoosh} key={index} sushi={sushi}/>))
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */

          sushis.slice(amtSushi, amtSushi+4)
        }
        <MoreButton onMoreSushi={props.onMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer