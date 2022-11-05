import React from 'react'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home"
import Thanks from './components/Thanks'

export default function App() {
  
  return (
    <Switch>
      <Route exact path="/">{Home}</Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route path="/thankyou"><Thanks /></Route>
    </Switch>

  )

}