import React from 'react';

import { connect } from 'react-redux';
import FavoriteList from './FavoriteList.js';

class FavoriteBeers extends React.Component {
   render() {
      const { dispatch, visibleTodos } = this.props
      return (
         <div>
            <h1>Favorite Beers</h1>
            <FavoriteList todos={visibleTodos} dispatch={dispatch}/>
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
