import React, { useContext } from 'react'
import { FavoriteContext } from '../context/context.js'
import Beer from './Beer.js'

const FavoriteBeers = props => {
  const { favoriteBeers, favoriteDispatch } = useContext(FavoriteContext)

  return (
    <div className='container'>
      <h4>Favorite Beers</h4>
      {favoriteBeers.map(beer =>
        <Beer
          key={beer.id}
          {...beer}
          dispatch={favoriteDispatch}
        />
      )}
    </div>
  )
}

export default FavoriteBeers
