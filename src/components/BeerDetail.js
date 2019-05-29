import React from 'react';

class Detail extends React.Component {
   render() {
      const beer = this.props.location.state.beer
      return (
         <div>
            <h1>Detail Beer</h1>
            <p>{beer.name}</p>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt="beer" />
         </div>
      );
   }
}

export default Detail;