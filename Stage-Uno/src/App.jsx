import React from 'react'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home"

export default function App() {
  const [family, update] = React.useState(1)
  return (
    <Switch>
      <Route exact path="/">{Home}</Route>
      <Route exact path="/contact"><Contact /></Route>
    </Switch>

  )

}