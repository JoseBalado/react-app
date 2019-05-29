import { combineReducers } from 'redux'
import { ADD_BEER } from './actions'

function todo(state, action) {
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
function todos(state = [], action) {
   switch (action.type) {
      case ADD_BEER:
         return [
            ...state,
            todo(undefined, action)
         ]
      default:
         return state
   }
}
const todoApp = combineReducers({
   todos
})
export default todoApp
