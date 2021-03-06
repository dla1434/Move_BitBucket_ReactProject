import React, { Component } from 'react'
import ValueInput from './ValueInput'

export default class InchToCm extends Component {
	constructor(props) {
		super(props)
	
		this.state = { inch: 0, cm: 0 }
	}
	
	render() {
		return (
			<div>
				<ValueInput title="inch" value={this.state.inch} />
				<ValueInput title="cm" value={this.state.cm} />
			</div>
		)
	}
}

//export default InchToCm
