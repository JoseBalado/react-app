import React from 'react';

import { connect } from 'react-redux';
import FavoriteList from './FavoriteList.js';

class FavoriteBeers extends React.Component {
   render() {
      const { dispatch, favoriteBeers } = this.props
      return (
         <div>
            <h2>Favorite Beers</h2>
            <FavoriteList beers={favoriteBeers} dispatch={dispatch}/>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      favoriteBeers: state.beers
   }
}

export default connect(mapStateToProps)(FavoriteBeers);
