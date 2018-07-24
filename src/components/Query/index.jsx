import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { onGetPosts, onReset } from "./actions";
import styles from "./styles.less";
import Post from "../Post";
import PropTypes from 'prop-types';

class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      error: null
    };

    this.getResult = this.getResult.bind(this);
  }

  getResult() {
    const { api } = this.props;

    axios
      .get(api)
      .then(response => {
        this.props.onGetPosts(response.data);
      })
      .catch(error => {
        this.setState({error: error});
      });
  }

  render() {
    const { flag, error } = this.state;
    const { posts, rendererChild } = this.props;

    if (!posts) {
      return (
        <div className={styles.wrapper}>
          <button onClick={this.getResult}>GET POSTS</button>
          {error && (
            <div>{`Ошибка! ${error.message}`}</div>
          )}
        </div>
      );
    }

    if (!flag) {
      return (
        <div className={styles.wrapper}>
          <h3>Посты успешно получены</h3>
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
              this.props.onReset();
              this.setState({ flag: false });
            }}
          >
            RESET
          </button>
        </div>

        {posts.map((post, index) => (
          <div key={index}>
            {rendererChild(post)}
          </div>
        ))}
      </div>
    );
  }
}

Query.propTypes = {
  api: PropTypes.string,
  rendererChild: PropTypes.func
}

Query.defaultProps = {
  api: ''
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => ({
  onGetPosts: posts => dispatch(onGetPosts(posts)),
  onReset: () => dispatch(onReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Query);
