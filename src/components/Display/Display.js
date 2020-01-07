import React, {Component} from 'react';
import './Display.css'

class Display extends Component {
	render() {
		return (
			<div className='calculator-results'>
				<div ref='calculationDisplay' className='calculationDisplay'  />
				<div ref='resultDisplay' className='resultDisplay'>{this.props.result}</div>
			</div>
		);
	}
}

export default Display;