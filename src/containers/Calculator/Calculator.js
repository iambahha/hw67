import React, {Component} from 'react';
import Display from "../../components/Display/Display";
import './Calculator.css'
import Button from "../../components/UI/Button/Button";
import {connect} from "react-redux";

class Calculator extends Component {
	render() {
		return (
			<div className="container">
				<Display />
				<div className='calculator-inputs-row'>
					<Button value={7} />
					<Button value={8} />
					<Button value={9} />
				</div>
				<div className='calculator-inputs-row'>
					<Button value={4} />
					<Button value={5} />
					<Button value={6} />
				</div>
				<div className='calculator-inputs-row'>
					<Button value={1} />
					<Button value={2} />
					<Button value={3} />
				</div>
				<div className='calculator-inputs-row'>
					<Button value="C" />
					<Button value={0} additionalClass="zero" />
					<Button value="E" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseCounter: () => dispatch({type: 'INCREMENT'})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);