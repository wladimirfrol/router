import React from 'react';

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

export default Route;