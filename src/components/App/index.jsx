import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import Axios from '../Axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter />
        <Form />
        <Axios />
      </div>
    );
  }
}

export default App;