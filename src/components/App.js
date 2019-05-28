import React from 'react';
import Header from './Header.js'
import Main from './Main.js'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         favoriteBeers: []
      }

      this.favoriteBeer = this.favoriteBeer.bind(this);
      console.log('App.js constructor');

   }

   favoriteBeer(id) {
      console.log('showInfo: id', id)
      console.log(this.state.beers.filter(beer => beer.id === id)[0])

      this.setState({
         favoriteBeers: this.state.favoriteBeers.concat(this.state.beers.filter(beer => beer.id === id)[0])
      });

      addTodo('hello')
      console.log(this.state.favoriteBeers);
   }

   render() {
      const { dispatch, visibleTodos } = this.props
      return (
         <div>
            <Header/>
            <Main />
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

export default connect(select)(App);