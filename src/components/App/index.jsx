import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import Axios from '../Axios';
import Toggle from '../Toggle';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter />
        <Form />
        <Toggle value={true}/>
        <Toggle value={true}/>
        <Axios />
      </div>
    );
  }
}

export default App;