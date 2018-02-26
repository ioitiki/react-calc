import React from 'react';
import Screen from './Screen';
import Button from './Button';

class Calculator extends React.Component {

  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    };
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="calculator">
        <Screen question={this.state.question} answer={this.state.answer} />
        <div className="button-row">
          <Button label={'1'} handleClick={this.onClick} type='input' />
          <Button label={'2'} handleClick={this.onClick} type='input' />
          <Button label={'3'} handleClick={this.onClick} type='input' />
          <Button label={'4'} handleClick={this.onClick} type='input' />
          <Button label={'-'} handleClick={this.onClick} type='action' />
          <Button label={'+'} handleClick={this.onClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'5'} handleClick={this.onClick} type='input' />
          <Button label={'6'} handleClick={this.onClick} type='input' />
          <Button label={'7'} handleClick={this.onClick} type='input' />
          <Button label={'8'} handleClick={this.onClick} type='input' />
          <Button label={'*'} handleClick={this.onClick} type='action' />
          <Button label={'/'} handleClick={this.onClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'9'} handleClick={this.onClick} type='input' />
          <Button label={'.'} handleClick={this.onClick} type='input' />
          <Button label={'0'} handleClick={this.onClick} type='input' />
          <Button label={'Cls'} handleClick={this.onClick} type='action' />
          <Button label={'='} handleClick={this.onClick} type='action' />
        </div>
      </div>
    );
  }

  onClick(event){
    const value = event.target.value;
    switch (value) {
    case '=': {
      const answer = eval(this.state.question).toString();
      this.setState({ answer });
      break;
    }
    case 'Cls': {
      this.setState({ question: '', answer: '' });
      break;
    }
    default: {
      const question = this.state.question;
      this.setState({ question: this.state.question += value });
      break;
    }
    }
  }
}

export default Calculator;
