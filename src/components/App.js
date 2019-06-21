import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import { FavoriteProvider } from '../context/context.js'

const App = () => {
  return (
    <div>
      <FavoriteProvider>
        <Header />
        <Main />
      </FavoriteProvider>
    </div>
  )
}

export default App
