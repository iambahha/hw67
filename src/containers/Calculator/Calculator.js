import React, {Component} from 'react';
import './Calculator.css'
import Button from "../../components/UI/Button/Button";
import {connect} from "react-redux";

class Calculator extends Component {
	render() {
		let bgColor = '#c62828';
		if (!this.props.isLocked) {
			bgColor = '#2e7d32';
		}
		return (
			<div className="container">
				<h5>{this.props.isLocked ? 'Access Denied' : 'Access Granted'}</h5>
				<input className="calc-display" type="password" value={this.props.code} disabled />
				<div className="buttons-block">
					<div className='calculator-inputs-row'>
						<Button onClick={() => this.props.addSymbol(7)} value={7} />
						<Button onClick={() => this.props.addSymbol(8)} value={8} />
						<Button onClick={() => this.props.addSymbol(9)} value={9} />
					</div>
					<div className='calculator-inputs-row'>
						<Button onClick={() => this.props.addSymbol(4)} value={4} />
						<Button onClick={() => this.props.addSymbol(5)} value={5} />
						<Button onClick={() => this.props.addSymbol(6)} value={6} />
					</div>
					<div className='calculator-inputs-row'>
						<Button onClick={() => this.props.addSymbol(1)} value={1} />
						<Button onClick={() => this.props.addSymbol(2)} value={2} />
						<Button onClick={() => this.props.addSymbol(3)} value={3} />
					</div>
					<div className='calculator-inputs-row'>
						<Button onClick={this.props.removeSymbol} value={"C"} />
						<Button onClick={() => this.props.addSymbol(0)} value={0} />
						<Button onClick={this.props.check} value={"E"} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		code: state.code,
		isLocked: state.isLocked
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addSymbol:(symbol) => dispatch({type: 'ADD_SYMBOL', symbol: symbol}),
		removeSymbol:() => dispatch({type: 'REMOVE_SYMBOL'}),
		check:() => dispatch({type: 'CHECK_PASSCODE'})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);