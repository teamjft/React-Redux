import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Calculator from '../components/calculator';
import * as calculatorActions from '../actions/index';
import { connect } from 'react-redux';

class CalculatorApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
      return (
      <Calculator
        firstNumber={state.firstNumber}
        secondNumber={state.secondNumber}
        operant={state.operant}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.calculator
}),
  (dispatch) => ({
    actions: bindActionCreators(calculatorActions, dispatch)
  })
)(CalculatorApp);
