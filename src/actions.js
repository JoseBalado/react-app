export const ADD_BEER = 'ADD_BEER'
export const REMOVE_BEER = 'REMOVE_BEER'

export function addBeer(beer) {
   console.log('beer', beer)
   return {
      type: ADD_BEER,
      beer
   };
}

export function removeBeer(id) {
   console.log('Remove beer', id)
   return {
      type: REMOVE_BEER,
      id
   };
}
