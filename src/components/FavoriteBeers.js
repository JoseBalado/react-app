import React from 'react';

import { connect } from 'react-redux';
import { addBeer } from '../actions';

import AddBeer from './AddBeer.js';
import FavoriteList from './FavoriteList.js';

class FavoriteBeers extends React.Component {
   render() {
      const { dispatch, visibleTodos } = this.props
      console.log(this.props)
      return (
         <div>
            <h1>Favorite Beers</h1>
            <AddBeer onAddClick = {text =>dispatch(addBeer(text))} />
            <FavoriteList todos = {visibleTodos}/>
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
