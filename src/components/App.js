import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import { FavoriteProvider } from '../context/context.js'
import Container from '@material-ui/core/Container'

const App = () => {
  return (
    <FavoriteProvider>
      <Container fixed>
        <Header />
        <Main />
      </Container>
    </FavoriteProvider>
  )
}

export default App
