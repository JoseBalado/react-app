import React from 'react';

import { connect } from 'react-redux';
import Beer from './Beer.js';

class FavoriteBeers extends React.Component {
   render() {
      const { dispatch, favoriteBeers } = this.props
      return (
         <div class="container">
            <h4>Favorite Beers</h4>
            {favoriteBeers.map(beer =>
               <Beer
                  key = {beer.id}
                  {...beer}
                  dispatch={dispatch}
               />
            )}
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
