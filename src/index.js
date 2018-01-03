import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Match, Miss } from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import { Provider } from 'react-redux'
import { store } from './store/store'

import './styles/app.sass'

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
	document.getElementById('root'));
