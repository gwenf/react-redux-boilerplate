import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exampleAction } from '../actions/actions'

class ExampleComponent1 extends Component {
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}
	render(){
		return (
			<div>
				<h1>Hello from ExampleComponent1.</h1>
				<button onClick={()=>{this.props.dispatch(exampleAction('dummy data here'))}}>Click here for redux test.</button>
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	testData: state.exampleReducer.testData
    };
};
ExampleComponent1 = connect(state => (mapStateToProps), null)(ExampleComponent1);
export default ExampleComponent1
