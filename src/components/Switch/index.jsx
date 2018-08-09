import React from 'react';
import withMyRouter from '../withMyRouter';

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const { url } = this.props.router;

    let child;

    for(let i = 0; i < children.length; i++) {
      const { path } = children[i].props;

      if(path === url) {
        child = children[i];
        break;
      }
    }

    if(child) {
      return child;
    }

    return(
      <div>404 NOT FOUND</div>
    );
  }
}

export default withMyRouter(Switch);