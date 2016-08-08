import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {Provider} from 'react-redux';
import { store, dispatch } from './store/store'

import ExampleComponent1 from './components/ExampleComponent1'
import ExampleComponent2 from './components/ExampleComponent2'

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={App}>
				<Route path='/' component={ExampleComponent1} />
				<Route path='/example' component={ExampleComponent2} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root'));
