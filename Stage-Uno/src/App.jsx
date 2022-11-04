import React from 'react'
import Profile from './components/Profile'
import Links from './components/Links'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Profile />
      <Links />
      <Footer />
    </Router>
  )

}