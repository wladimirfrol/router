import React from 'react';

import Route from '../Route';
import Switch from '../Switch';

import Index from '../../pages/index';
import Contacts from '../../pages/contacts';
import About from '../../pages/about';

import withMyRouter from '../withMyRouter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '/'
    }

    this.handleInput = this.handleInput.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
  }

  handleInput(event) {
    this.setState({ url: event.target.value });
  }

  changeUrl() {
    const { url } = this.state;
    const { onHandleUrl } = this.props;

    onHandleUrl(url);
  }

  render() {
    const { url, historyIndex, history } = this.props.router;

    return(
      <div>
        <input type="text" onChange={this.handleInput} value={this.state.url}/>
        <button onClick={this.changeUrl}>CHANGE URL</button>
        <button 
          disabled={historyIndex === 0 ? true : false}
          onClick={this.props.onGoBack}
        >PREV</button>
        <button 
          disabled={historyIndex + 1 === history.length ? true : false}
          onClick={this.props.onGoForward}
        >NEXT</button>

        <hr/>

        <Switch>
          <Route path='/'  component={<Index />}/>
          <Route path='/contacts'  component={<Contacts />}/>
          <Route path='/about'  component={<About />}/>
        </Switch>
      </div>
    );
  }
}

export default withMyRouter(App);