import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ExampleComponent1 from './components/ExampleComponent1'
import ExampleComponent2 from './components/ExampleComponent2'

export default class App extends Component {
  render() {
    return (
        <Router>
        	<div>

		    	<div>
					<h1>Test App.</h1>
					<Link to='/'>Page 1</Link>
					<Link to='/example'>Page 2</Link>
				</div>


				<Route exact={true} path='/' component={ExampleComponent1}/>
				<Route path='/example' component={ExampleComponent2}/>

			</div>

	    </Router>
    );
  }
}
