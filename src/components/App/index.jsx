import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import Query from '../Query';
import Toggle from '../Toggle';
import Post from '../Post';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Query
          api='https://jsonplaceholder.typicode.com/posts'
          elemName='posts'
          rendererChild={(post) => {
            return(
              <Post
                title={post.title}
                body={post.body}
                postId={post.id}
                userId={post.userId}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;