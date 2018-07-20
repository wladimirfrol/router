import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less'

class Post extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { userId, postId, title, body } = this.props;

        return(
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
                <div className={styles.body}>
                    <span>{body}</span>
                </div>
                <div className={styles.wrapperId}>
                    <div className={styles.userId}>
                        <span>{`userId ${userId}`}</span>
                    </div>
                    <div className={styles.postId}>
                        <span>{`postId ${postId}`}</span>
                    </div>
                </div>
            </div>
        );
    }
};

Post.defaultProps = {
    title: 'title',
    body: 'body',
    postId: 1,
    userId: 1
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    postId: PropTypes.number,
    userId: PropTypes.number
};

export default Post;