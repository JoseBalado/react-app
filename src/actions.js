export const ADD_BEER = 'ADD_BEER'
export const REMOVE_BEER = 'REMOVE_BEER'

let nextTodoId = 0;

export function addBeer(beer) {
   console.log('beer', beer)
   return {
      type: ADD_BEER,
      beer
   };
}
