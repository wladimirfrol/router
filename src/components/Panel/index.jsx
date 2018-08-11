import React from "react";
import withMyRouter from "../withMyRouter";

import styles from './styles.less';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "/"
    };

    this.handleInput = this.handleInput.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.keyPressInput = this.keyPressInput.bind(this);
  }

  keyPressInput(e) {
    if(e.key == 'Enter') {
      this.changeUrl();
    }
  }

  handleInput(event) {
    this.setState({ url: event.target.value });
  }

  goBack() {
    const { onGoBack } = this.props;
    const { historyIndex, history } = this.props.router;
    this.setState({ url: history[historyIndex - 1] });
    onGoBack();
  }

  goForward() {
    const { onGoForward } = this.props;
    const { historyIndex, history } = this.props.router;
    this.setState({ url: history[historyIndex + 1] });
    onGoForward();
  }

  changeUrl() {
    const { url } = this.state;
    const { onHandleUrl } = this.props;

    onHandleUrl(url);
  }

  render() {
    const { historyIndex, history } = this.props.router;

    return [
      <div className={styles.wrapper} key='1'>
        <button
          className={styles.btnPage}
          disabled={historyIndex === 0 ? true : false}
          onClick={this.goBack}
        >
          &#60;
        </button>
        <button
          className={styles.btnPage}
          disabled={historyIndex + 1 === history.length ? true : false}
          onClick={this.goForward}
        >
          &#62;
        </button>
        <input type="text" onChange={this.handleInput} onKeyPress={this.keyPressInput} value={this.state.url} />
        <button
          className={styles.btnGo} 
          onClick={this.changeUrl}>GO</button>
      </div>,
      <hr key='2' />
    ];
  }
}

export default withMyRouter(Panel);