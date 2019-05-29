import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addBeer } from '../store/actions';

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
         const res = await axios.get(`https://api.punkapi.com/v2/beers`);
         const beers = res.data;
         this.setState({ beers });
      } catch (error) {
         console.log(error);
      }
   }

   render() {
      const { dispatch } = this.props
      return (
         <div>
            <h2>{this.state.message}</h2>
            {this.state.beers.map(beer => <div key={beer.id}>
               <div class="container">
                  <div class="row">
                     <div class="col-sm">
                        {beer.name}
                     </div>
                     <div class="col-sm">
                        <Link
                           className="btn btn-outline-info btn-sm"
                           to={{
                              pathname: `/detail/${beer.id}`,
                              state: {
                              beer: beer
                           }}}>
                           Detailed info
                        </Link>
                     </div>
                     <div class="col-sm">
                        <button
                           className="btn btn-primary btn-sm"
                           onClick={(e) => dispatch(addBeer({ id: beer.id, name: beer.name}))}
                        >
                           Favorite Beer
                        </button>
                     </div>
                  </div>
               </div>
            </div>)}
         </div>
      );
   }
}

export default connect()(Content);
