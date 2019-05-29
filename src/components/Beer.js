import React, { Component } from 'react';
import { removeBeer } from '../store/actions';

export default class Beer extends Component {
   render() {
      return (
         <div class="row">
            <div class="col">
               {this.props.name}
            </div>
            <div class="col">
               <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => this.props.dispatch(removeBeer(this.props.id))}
               >
                  Remove Beer
               </button>
            </div>
       </div>
      )
   }
}