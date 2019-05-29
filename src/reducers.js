import { combineReducers } from 'redux'
import { ADD_BEER } from './actions'
import { REMOVE_BEER } from './actions'

function beers(state = [], action) {
   console.log('state',
      [
            ...state,
            action.beer
         ]
   )
   switch (action.type) {
      case ADD_BEER:
         return [
            ...state,
            action.beer
         ]
      default:
         return state
   }
}

function removeBeer(state, action) {
   switch (action.type) {
      case REMOVE_BEER:
         return [
            ...state,
           action
         ]
      default:
         return state
   }
}

const beerApp = combineReducers({
   beers
})
export default beerApp
