import React, { Component } from 'react'

export default class Beer extends Component {
   render() {
      return (
         <li>
            {this.props.text}
         </li>
      )
   }
}