import React from 'react';
import Screen from './Screen';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-title">
          Calculator
        </div>
        <Screen question={this.state.question} answer={this.state.answer} />
      </div>
    );
  }

}

export default Calculator;
