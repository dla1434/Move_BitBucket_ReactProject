import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TestInput from './TestInput.js';

class App extends Component {
	render() {
		return (
			<TestInput str="asdasd" num={121} bool={true} />
		);
	}
}

export default App;
