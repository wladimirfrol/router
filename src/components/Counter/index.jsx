import React from 'react';
import styles from './styles.less';
import { connect } from 'react-redux';
import { onIncrement, onDecrement, onResetCounter } from './actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(styles);

    return (
      <div className={styles.wrapper}>
        <button className={styles.btnPlus} onClick={this.props.onIncrement}>+</button>
        <div className={styles.counter}>{this.props.counter}</div>
        <button className={styles.btnMinus} onClick={this.props.onDecrement}>-</button>
        <button className={styles.btnReset} onClick={this.props.onResetCounter}>RESET</button>
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
