import React from 'react';

class Detail extends React.Component {
   render() {
      return (
         <div>
            <h1>Detail</h1>
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
            <img src={this.props.imageUrl} alt="beer" />
         </div>
      );
   }
}

export default Detail