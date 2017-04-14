import React from 'react'
import { render } from 'react-dom'
import App from './App'

// import { Route, Router, IndexRoute } from 'react-router';
import { BrowserRouter, Match, Miss } from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import { Provider } from 'react-redux'
import { store } from './store/store'

import './styles/app.sass'


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
