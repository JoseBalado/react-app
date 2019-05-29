import React, { Component } from 'react'
import { addBeer } from '../actions'

export default class Beer extends Component {
   render() {
      console.log('beer component:', this.props)
      return (
         <li>
            {this.props.name}
            <button onClick={(e) => this.props.dispatch(addBeer(this.props.id))}>Remove Beer</button>
         </li>
      )
   }
}