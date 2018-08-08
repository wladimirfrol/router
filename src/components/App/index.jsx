import React from 'react';

import Route from '../Route';
import Switch from '../Switch';

import Index from '../../pages/index';
import Contacts from '../../pages/contacts';
import About from '../../pages/about';

import { connect } from 'react-redux';
import {
  onHandleUrl,
  onGoBack,
  onGoForward
} from './actions';


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

    console.log(this.props.router);

    return(
      <div>
        <input type="text" onChange={this.handleInput} value={this.state.url}/>
        <button onClick={this.changeUrl}>CHANGE URL</button>
        <button 
          onClick={this.props.onGoBack}
          style={historyIndex === 0 ? {background: 'gray'} : {background: 'white'}}
        >PREV</button>
        <button 
          onClick={this.props.onGoForward}
          style={historyIndex + 1 === history.length ? {background: 'gray'} : {background: 'white'}}
        >NEXT</button>

        <hr/>

        <Switch url={url}>
          <Route path='/'  component={<Index />}/>
          <Route path='/contacts'  component={<Contacts />}/>
          <Route path='/about'  component={<About />}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    router: state.router
  };
}

const mapDispatchToProps = (dispatch) => ({
  onHandleUrl: (url) => dispatch(onHandleUrl(url)),
  onGoBack: () => dispatch(onGoBack()),
  onGoForward: () => dispatch(onGoForward()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);