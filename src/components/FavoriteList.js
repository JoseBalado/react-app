import React, { Component } from 'react';
import Beer from './Beer.js';

export default class FavoriteList extends Component {
   render() {
      return (
         <div class="container">
            {this.props.beers.map(beer =>
               <Beer
                  key = {beer.id}
                  {...beer}
                  dispatch={this.props.dispatch}
               />
            )}
         </div>
      )
   }
}