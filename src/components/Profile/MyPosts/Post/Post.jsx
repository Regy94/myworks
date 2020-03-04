import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.post}>
            <div className={c.post__header}>{props.header}</div>
            <div className={c.post__text}>{props.text}</div>
        </div>
    );
}

export default Post;