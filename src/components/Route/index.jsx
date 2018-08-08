import React from 'react';
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

export default Route;