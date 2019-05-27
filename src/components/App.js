import React from 'react';
import Header from './Header.js'
// import Content from './Content.js'
import Main from './Main.js'

class App extends React.Component {
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