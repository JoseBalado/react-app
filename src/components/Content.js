import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Content extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         message: 'List of beers',
         beers: [],
         favoriteBeers: []
      }

      this.favoriteBeer = this.favoriteBeer.bind(this);

   }

   favoriteBeer(id) {
      console.log('showInfo: id', id)
      console.log(this.state.beers.filter(beer => beer.id === id)[0])

      this.setState({
         favoriteBeers: this.state.favoriteBeers.concat(this.state.beers.filter(beer => beer.id === id)[0])
      });

      console.log(this.state.favoriteBeers);
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
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
            <p>{this.state.message}</p>
            {this.state.beers.map(beer => <div key={beer.id}>
               {beer.name}
               <button onClick={(e) => this.favoriteBeer(beer.id, e)}>Favorite Beer</button>
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

export default Content;