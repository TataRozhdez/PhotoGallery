import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { About } from './pages/About/About'
import { Favorite } from './pages/Favorite/Favorite'
import { Home } from './pages/Home/Home'
import './App.scss'

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/favorite' component={Favorite} />
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}
