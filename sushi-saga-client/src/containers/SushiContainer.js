import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log('sushi container props:', props)
  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.slice(props.sushiScroll, props.sushiScroll + 4).map(sushi => <Sushi currentSushi={sushi} eatSushi={props.eatSushi} />)}
        <MoreButton handleMoreSushi={props.handleMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer