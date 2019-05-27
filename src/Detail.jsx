import React from 'react';

class Detail extends React.Component {
   render() {
      return (
         <div>
            <h1>Detail Beer</h1>
            <p>{this.props.name}</p>
         </div>
      );
   }
}

export default Detail