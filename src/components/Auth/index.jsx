import React from 'react';
import axios from 'axios';
import PropsTypes from 'prop-types';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: false
        }
    }

    componentDidMount() {
        const { apiUrl } = this.props;
        axios({
            method: 'post',
            url: apiUrl,
            data: {
                login: 'kv9991',
                password: '123456'
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render() {
        const { auth } = this.state;

        return(
            <div>
                <div>AUTH COMPONENT</div>
                <div>
                    {auth && this.props.children}
                </div>
            </div>
        );
    }
}

Auth.propTypes = {
    apiUrl: PropsTypes.string
}

Auth.defaultProps = {
    apiUrl: ''
}

export default Auth;