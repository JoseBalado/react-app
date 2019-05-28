import React, { Component } from 'react'
import { addBeer } from '../actions'

export default class Beer extends Component {
   render() {
      console.log(this.props)
      return (
         <li>
            {this.props.text}
            <button onClick={(e) => this.props.dispatch(addBeer('beer.name'))}>Remove Beer</button>
         </li>
      )
   }
}