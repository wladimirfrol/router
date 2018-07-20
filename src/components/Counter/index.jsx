import React from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement, onResetCounter } from './actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
        <button onClick={this.props.onResetCounter}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(onIncrement()),
  onDecrement: () => dispatch(onDecrement()),
  onResetCounter: () => dispatch(onResetCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
