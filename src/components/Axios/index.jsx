import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { onGetPosts, onReset } from "./actions";

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
        <div>
          <button onClick={this.getResult}>GET POSTS</button>
        </div>
      );
    }

    if(!flag) {
      return (
        <div>
          <h3>Посты успешно получены</h3>
          <button onClick={() => {
            this.setState({ flag: true })
          }}>Отобразить</button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={() => {
          this.props.onReset();
          this.setState({ flag: false });
        }}>RESET</button>
        {posts.map((post, index) => (
          <div key={index}>{`id: ${post.id} >> title: ${post.title}`}</div>
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
