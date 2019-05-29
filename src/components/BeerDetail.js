import React from 'react';

class Detail extends React.Component {
   render() {
      const beer = this.props.location.state.beer
      return (
         <div>
            <h2>Beer Detail</h2>
            <div class="container">
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
               </div>
            </div>
         </div>
      );
   }
}

export default Detail;