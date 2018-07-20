import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { onGetPosts, onReset } from "./actions";
import styles from './styles.less';
import Post from "../Post";

class Axios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false
    };

    this.getResult = this.getResult.bind(this);
  }

  getResult() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.props.onGetPosts(response.data);
      })
      .catch();
  }

  render() {
    const { result, flag } = this.state;
    const { posts } = this.props;

    if (!posts) {
      return (
        <div className={styles.wrapper}>
          <button onClick={this.getResult}>GET POSTS</button>
        </div>
      );
    }

    if(!flag) {
      return (
        <div className={styles.wrapper}>
          <h3>Посты успешно получены</h3>
          <button onClick={() => {
            this.setState({ flag: true })
          }}>Отобразить</button>
        </div>
      );
    }

    console.log(posts);
    return (
      <div className={styles.wrapperPost}>
        <div className={styles.wrapBtnReset}>
          <button onClick={() => {
            this.props.onReset();
            this.setState({ flag: false });
          }}>RESET</button>
        </div>

        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            body={post.body}
            postId={post.id}
            userId={post.userId}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = dispatch => ({
  onGetPosts: (posts) => dispatch(onGetPosts(posts)),
  onReset: () => dispatch(onReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Axios);
