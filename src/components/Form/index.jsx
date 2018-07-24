import React from 'react';
import { connect } from 'react-redux';
import { onAddFirstName, onAddSecondName, onReset } from './actions'
import styles from './styles.less';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.confirm = this.confirm.bind(this);
  }

  addFirstName(val) {
    const { onAddFirstName } = this.props;
    onAddFirstName(val);
  }
  
  addSecondName(val) {
    const { onAddSecondName } = this.props;
    onAddSecondName(val);
  }

  confirm() {
    const { firstName, secondName } = this.props.form;

    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        login: firstName,
        password: secondName
      }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
    console.log(123);
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
        
        <button onClick={onReset} className={styles.buttonReset}>RESET</button>
        <button onClick={this.confirm} className={styles.buttonConfirm}>CONFIRM</button>
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