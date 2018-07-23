import React from 'react';

const TestHoc = Component => {
    class TestHOC extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('prevProps', this.props);
            console.log('nextProps', nextProps);
        }

        render() {
            return <Component { ...this.props } />;
        }
    }

    TestHOC.displayName = `TestHOC(${Component.displayName || Component.name || 'Component'})`;
    return TestHOC;
}

export default TestHoc;