import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Route extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { component } = this.props;

    return (
      <div>{component}</div>
    );
  }
}

Route.PropTypes = {
  path: PropTypes.string,
  component: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    router: state.router,
  };
}

export default connect(
  mapStateToProps
)(Route);