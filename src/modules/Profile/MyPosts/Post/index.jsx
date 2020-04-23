import React from 'react';

import styles from './Post.module.css'

const Post = (props) => {

    const {header, text} = props;

    return (
        <div className={styles.post}>
            <div className={styles.post__header}>{header}</div>
            <div className={styles.post__text}>{text}</div>
        </div>
    );
}

export default Post;