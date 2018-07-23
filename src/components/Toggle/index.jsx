import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';
import { smallTitle } from './utils';
import TestHoc from '../HOC/TestHoc';

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            title: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { value } = this.state;
        this.setState({
            value: !value
        });
    }

    render() {   
        const { value } = this.state;
        const { title, maxlengthTitle } = this.props;

        

        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>{smallTitle(title, maxlengthTitle).toUpperCase()}</div>
                <div className={value ? styles.railTrue : styles.railFalse} onClick={this.handleClick}>
                    <div className={value ? styles.sliderTrue : styles.sliderFalse} onClick={this.handleClick}>
                        {value ? 'ON' : 'OFF'}
                    </div>
                </div>
            </div>
        );
    }
}

Toggle.propTypes = {
    value: PropTypes.bool,
    title: PropTypes.string,
    maxlengthTitle: PropTypes.number
}

Toggle.defaultProps = {
    title: '',
    value: false,
    maxlengthTitle: 4
}

export default TestHoc(Toggle);
