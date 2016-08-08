import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'

const appReducer = combineReducers({
  exampleReducer
})

const testApp = (state, action) => {
	switch (action.type) {
		case 'LOGGED_OUT':
		state = undefined;
	}

	return appReducer(state, action)
}
export default testApp