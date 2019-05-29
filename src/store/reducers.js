import { combineReducers } from 'redux';
import { ADD_BEER } from './actions';
import { REMOVE_BEER } from './actions';

function beers(state = [], action) {
   switch (action.type) {
      case ADD_BEER:
         return state.some(beer => beer.id === action.beer.id)
            ? state
            : [ ...state, action.beer ]
      case REMOVE_BEER:
         return state.filter(beer => beer.id !== action.id)
      default:
         return state
   }
}

const beerApp = combineReducers({
   beers
})

export default beerApp;
