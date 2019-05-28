import React from 'react';
import Header from './Header.js'
import Main from './Main.js'

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         favoriteBeers: []
      }

      this.favoriteBeer = this.favoriteBeer.bind(this);
      console.log('App.js constructor');

   }

   favoriteBeer(id) {
      console.log('showInfo: id', id)
      console.log(this.state.beers.filter(beer => beer.id === id)[0])

      this.setState({
         favoriteBeers: this.state.favoriteBeers.concat(this.state.beers.filter(beer => beer.id === id)[0])
      });
   }

   render() {
      return (
         <div>
            <Header/>
            <Main />
         </div>
      );
   }
}

export default App;
