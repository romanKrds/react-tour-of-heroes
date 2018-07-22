import React from 'react'
import { Route, Link } from 'react-router-dom'
import Heroes from '../heroes'
import Dashboard from '../dashboard'
import HeroDetails from '../hero-details'
import './app.css'
import EntryPoint from '../entry-point';

const App = () => (
	<div>
		<EntryPoint>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/heroes" component={Heroes} />
			<Route exact path="/details/:id" component={HeroDetails}/>
		</EntryPoint>
	</div>
)

export default App
