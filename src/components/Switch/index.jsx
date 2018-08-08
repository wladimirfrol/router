import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, url } = this.props;

    let child;

    children.map(element => {
      const { path } = element.props;

      if(path === url) {
        child = element;
      }
    });

    if(child) {
      return child;
    }

    return(
      <div>404 NOT FOUND</div>
    );
  }
}

export default Switch;