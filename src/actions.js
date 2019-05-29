export const ADD_BEER = 'ADD_BEER'

let nextTodoId = 0;

export function addBeer(text) {
   return {
      type: ADD_BEER,
      id: nextTodoId++,
      text
   };
}
