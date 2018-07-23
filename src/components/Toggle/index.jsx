import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
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

        return (
            <div className={value ? styles.wrapTrue : styles.wrapFalse}>
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
    value: PropTypes.bool
}

Toggle.defaultProps = {
    value: false
}

export default Toggle;
