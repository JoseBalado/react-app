import React from 'react'

const Beer = props => (
  <div className='row mt-1'>
    <div className='col'>
      {props.name}
    </div>
    <div className='col'>
      <button
        className='btn btn-danger btn-sm'
        onClick={(e) => props.dispatch({ type: 'REMOVE_BEER', beer: { id: props.id } })}
      >
        Remove Beer
      </button>
    </div>
  </div>
)

export default Beer
