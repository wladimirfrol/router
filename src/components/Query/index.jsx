import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { onGetElements, onResetQueryState } from "./actions";
import styles from "./styles.less";
import PropTypes from 'prop-types';

class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      error: null
    };

    this.getElements = this.getElements.bind(this);
  }

  getElements() {
    const { api } = this.props;

    axios
      .get(api)
      .then(response => {
        this.props.onGetElements(response.data);
      })
      .catch(error => {
        this.setState({error: error});
      });
  }

  render() {
    const { flag, error } = this.state;
    const { elements, rendererChild, elemName } = this.props;

    if (!elements) {
      return (
        <div className={styles.wrapper}>
          <button onClick={this.getElements}>{`GET ${elemName.toUpperCase()}`}</button>
          {error && (
            <div>{`Ошибка! ${error.message}`}</div>
          )}
        </div>
      );
    }

    if (!flag) {
      return (
        <div className={styles.wrapper}>
          <h3>{`${elemName.toUpperCase()} успешно получены`}</h3>
          <button
            onClick={() => {
              this.setState({ flag: true });
            }}
          >
            Отобразить
          </button>
        </div>
      );
    }

    return (
      <div className={styles.wrapperPost}>
        <div className={styles.wrapBtnReset}>
          <button
            onClick={() => {
              this.props.onResetQueryState();
              this.setState({ flag: false });
            }}
          >
            RESET
          </button>
        </div>

        {elements.map((element, index) => (
          <div key={index}>
            {rendererChild(element)}
          </div>
        ))}
      </div>
    );
  }
}

Query.propTypes = {
  api: PropTypes.string,
  rendererChild: PropTypes.func,
  elemName: PropTypes.string
}

Query.defaultProps = {
  api: '',
  elemName: 'ELEMENTS'
}

const mapStateToProps = state => {
  return {
    elements: state.elements
  };
};

const mapDispatchToProps = dispatch => ({
  onGetElements: elements => dispatch(onGetElements(elements)),
  onResetQueryState: () => dispatch(onResetQueryState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query);
