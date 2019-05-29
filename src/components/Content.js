import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addBeer } from '../actions'

class Content extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         message: 'List of beers',
         beers: []
      }
   }

  async componentDidMount() {
     try {
       await axios.get(`https://api.punkapi.com/v2/beers`)
        .then(res => {
          const beers = res.data;
          console.log(beers);
          this.setState({ beers });
        })

      } catch(error) {
         console.log(error);
      }
    }

   render() {
      const { dispatch } = this.props
      return (
         <div>
            <h2>Content</h2>
            <p>{this.state.message}</p>
            {this.state.beers.map(beer => <div key={beer.id}>
               {beer.name}
               <button onClick={(e) => dispatch(addBeer({ id: beer.id, name: beer.name}))}>Favorite Beer</button>
               <Link 
                  to={{
                     pathname: `/detail/${beer.id}`,
                     state: {
                     beer: beer
                  }}}>
                  {beer.name}
               </Link>
            </div>)}
         </div>
      );
   }
}

export default connect()(Content);
