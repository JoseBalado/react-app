import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Detail from './Detail.js'

class Content extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         message: 'List of beers',
         beers: [],
         selectedBeer: {}
      }

      this.showInfo = this.showInfo.bind(this);

   }

   showInfo(id) {
      // this.setState({isLoggedIn: true});
      console.log('showInfo: id', id)
      console.log(this.state.beers.filter(beer => beer.id === id)[0])
      this.setState({ selectedBeer: this.state.beers.filter(beer => beer.id === id)[0] })
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
               <button onClick={(e) => this.showInfo(beer.id, e)}>Show info</button>
               <Link to={`/detail/${beer.id}`}>{beer.name}</Link>
            </div>)}
            <Detail
               name={this.state.selectedBeer.name}
               description={this.state.selectedBeer.description}
               imageUrl={this.state.selectedBeer.image_url}
            ></Detail>
         </div>
      );
   }
}

export default Content;