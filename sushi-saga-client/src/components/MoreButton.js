import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.onRotate()}>
            More sushi!
          </button>
}

export default MoreButton