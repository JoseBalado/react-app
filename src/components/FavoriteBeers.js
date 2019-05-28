import React from 'react';

import { connect } from 'react-redux'
import { addTodo } from '../actions'

import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'

class FavoriteBeers extends React.Component {
   render() {
      const { dispatch, visibleTodos } = this.props
      console.log(this.props)
      return (
         <div>
            <h1>Favorite Beers</h1>
            <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos}/>
         </div>
      );
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}

export default connect(select)(FavoriteBeers);
