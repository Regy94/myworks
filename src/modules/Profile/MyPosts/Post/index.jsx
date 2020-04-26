import React from 'react';

import styles from './Post.module.scss'

const Post = (props) => {

    const {header, text} = props;

    return (
        <div className={styles.post}>
            <div className={styles.post__header}>{header}</div>
            <div className={styles.post__text}>{text}</div>
            <button className={styles.post__btn}><i className="fa fas fa-trash"></i></button>
        </div>
    );
}

export default Post;