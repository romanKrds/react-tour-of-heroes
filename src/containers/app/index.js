import React from 'react'
import { Route, Link } from 'react-router-dom'
import Heroes from '../heroes'
import Dashboard from '../dashboard'
import './app.css'

const App = () => (
  <div>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/heroes">Heroes</Link>
    </nav>

    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/heroes" component={Heroes} />
    </main>
  </div>
)

export default App
