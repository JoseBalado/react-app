import React from 'react';

class Detail extends React.Component {
   render() {
      const beer = this.props.location.state.beer
      return (
         <div class="container">
            <h4>Beer Detail</h4>
            <div class="row">
               <div class="col">
                  Name:
               </div>
               <div class="col">
                  <p>{beer.name}</p>
               </div>
            </div>
            <div class="row">
               <div class="col">
                  Description:
               </div>
               <div class="col">
                  <p>{beer.description}</p>
               </div>
            </div>
            <div class="row">
               <div class="col">
                  <img src={beer.image_url} alt="beer" />
               </div>
               <div class="col">
               </div>
            </div>
         </div>
      );
   }
}

export default Detail;