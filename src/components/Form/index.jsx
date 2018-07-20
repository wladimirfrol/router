import React from 'react';
import { connect } from 'react-redux';
import { onAddFirstName, onAddSecondName, onReset } from './actions'
import styles from './styles.less'

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  addFirstName(val) {
    const { onAddFirstName } = this.props;
    onAddFirstName(val);
  }
  
  addSecondName(val) {
    const { onAddSecondName } = this.props;
    onAddSecondName(val);
  }

  render() {

    const { firstName, secondName } = this.props.form;
    const { onReset } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <span>Enter please firstName:{" "}</span>
          <input 
            type="text" 
            value={firstName}
            onChange={(event) => {this.addFirstName(event.target.value)}}
          />
        </div>
        
        <div className={styles.inputWrapper}>
          <span>Enter please secondName:{" "}</span>
          <input 
            type="text" 
            value={secondName}
            onChange={(event) => {this.addSecondName(event.target.value)}}
          />
        </div>
        
        <button onClick={onReset} className={styles.button}>RESET</button>
        <div className={styles.result}>
          {`Result: ${firstName} ${secondName}`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form
  };
}

const mapDispatchToProps = dispatch => ({
  onAddFirstName: (data) => dispatch(onAddFirstName(data)),
  onAddSecondName: (data) => dispatch(onAddSecondName(data)),
  onReset: () => dispatch(onReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);