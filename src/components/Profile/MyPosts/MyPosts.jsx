import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div className={c.MyPosts}>
            <Post header="Header 1" text="Any text here" />
            <Post header="Header 2" text="This is my first post" />
        </div>
    );
}

export default MyPosts;