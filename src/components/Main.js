import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './Content.js'
import Detail from './BeerDetail'
import FavoriteBeers from './favoriteBeers'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Content}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/favorites' component={FavoriteBeers}/>
      </Switch>
    </main>
  )
  
  export default Main