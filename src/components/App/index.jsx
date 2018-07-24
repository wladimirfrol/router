import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import Query from '../Query';
import Toggle from '../Toggle';
import Post from '../Post';
import Auth from '../Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Auth apiUrl='http://levelup.name/api/user/signin'>
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
        </Auth>
      </div>
    );
  }
}

export default App;