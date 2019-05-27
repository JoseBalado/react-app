import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './Content.js'
import Detail from './Detail'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Content}/>
        <Route path='/detail' component={Detail}/>
      </Switch>
    </main>
  )
  
  export default Main