const ADD_BEER = 'ADD_BEER'
const REMOVE_BEER = 'REMOVE_BEER'

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_BEER:
      return state.some(beer => beer.id === action.beer.id)
        ? state
        : [...state, action.beer]
    case REMOVE_BEER:
      return state.filter(beer => beer.id !== action.beer.id)
    default:
      return state
  }
}

export default favoritesReducer
