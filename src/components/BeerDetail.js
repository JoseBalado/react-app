import React from 'react';

class Detail extends React.Component {
   render() {
      const beer = this.props.location.state.beer
      return (
         <div className="container">
            <h4>Beer Detail</h4>
            <div className="row mt-1">
               <div className="col">
                  Name:
               </div>
               <div className="col">
                  <p>{beer.name}</p>
               </div>
            </div>
            <div className="row mt-1">
               <div className="col">
                  Description:
               </div>
               <div className="col">
                  <p>{beer.description}</p>
               </div>
            </div>
            <div className="row mt-1">
               <div className="col">
                  <img src={beer.image_url} alt="beer" />
               </div>
            </div>
         </div>
      );
   }
}

export default Detail;