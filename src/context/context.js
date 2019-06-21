import React, { useReducer, createContext } from 'react'
import favoritesReducer from './reducers.js'

const FavoriteContext = createContext(null)

const FavoriteProvider = props => {
  const [favoriteBeers, favoriteDispatch] = useReducer(favoritesReducer, [])
  return (
    <FavoriteContext.Provider value={{ favoriteBeers, favoriteDispatch }}>
      {props.children}
    </FavoriteContext.Provider>
  )
}

export { FavoriteContext, FavoriteProvider }
