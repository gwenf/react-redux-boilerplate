import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
    	<div>
	      <h1>Test App.</h1>
	      <Link to='/'>Page 1</Link>
	      <Link to='/example'>Page 2</Link>
	      {this.props.children}
	    </div>
    );
  }
}
