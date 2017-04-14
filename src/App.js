import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import ExampleComponent1 from './components/ExampleComponent1'
import ExampleComponent2 from './components/ExampleComponent2'

export default class App extends Component {
  render() {
    return (
        <Router>
        <div>
        	<div className='row'>

        		<ul className='menu'>
					<li className='menu-text'>Test App</li>
					<li><NavLink exact activeStyle={{fontWeight: 'bold'}} to='/'>Page 1</NavLink></li>
					<li><NavLink activeStyle={{fontWeight: 'bold'}} to='/example'>Page 2</NavLink></li>
				</ul>

			</div>

			<div className='row'>
				<Route exact={true} path='/' component={ExampleComponent1}/>
				<Route path='/example' component={ExampleComponent2}/>
			</div>

		</div>
	    </Router>
    );
  }
}
