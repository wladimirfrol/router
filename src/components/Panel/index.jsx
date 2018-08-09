import React from "react";
import withMyRouter from "../withMyRouter";

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

    return (
      <div>
        <input type="text" onChange={this.handleInput} value={this.state.url} />
        <button onClick={this.changeUrl}>CHANGE URL</button>
        <button
          disabled={historyIndex === 0 ? true : false}
          onClick={this.goBack}
        >
          PREV
        </button>
        <button
          disabled={historyIndex + 1 === history.length ? true : false}
          onClick={this.goForward}
        >
          NEXT
        </button>
        <hr />
      </div>
    );
  }
}

export default withMyRouter(Panel);