import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.Post}>
            <div className={c.Post__header}>{props.header}</div>
            <div className={c.Post__text}>{props.text}</div>
        </div>
    );
}

export default Post;