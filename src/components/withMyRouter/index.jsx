import React from "react";
import { connect } from "react-redux";

import {
  onHandleUrl,
  onGoBack,
  onGoForward
} from './actions';

const withMyRouter = Child => {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <Child {...this.props} />
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

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

export default withMyRouter;