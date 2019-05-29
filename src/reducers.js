import { combineReducers } from 'redux'
import { ADD_BEER } from './actions'

function beer(state, action) {
   switch (action.type) {
      case ADD_BEER:
         return {
            id: action.id,
            text: action.text,
         }
      default:
         return state
   }
}
function beers(state = [], action) {
   switch (action.type) {
      case ADD_BEER:
         return [
            ...state,
            beer(undefined, action)
         ]
      default:
         return state
   }
}
const beerApp = combineReducers({
   beers
})
export default beerApp
