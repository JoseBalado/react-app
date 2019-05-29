import React, { Component } from 'react'
import { removeBeer } from '../store/actions'

export default class Beer extends Component {
   render() {
      return (
         <li>
            {this.props.name}
            <button onClick={(e) => this.props.dispatch(removeBeer(this.props.id))}>Remove Beer</button>
         </li>
      )
   }
}