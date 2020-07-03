import React from 'react';

import AddNewPostForm from './AddNewPostForm'
import Post from './Post'

import styles from './MyPosts.module.css'
import { useEffect } from 'react';

const MyPosts = (props) => {

    const {posts, userId, addPost, getPosts} = props;

    useEffect(() => {
        getPosts(userId)
    }, [])

    const postsArray = posts.map( ({header, text, id}) => <Post header={header} text={text} key={id} />)

    const handleAddPost = (data) => {
        addPost(data.postText)
    }

    return (
        <div className={styles.myposts}>
            <div className={styles.myposts__header}>My Posts</div>
            <div className={styles.myposts__add}>
                <AddNewPostForm onSubmit={handleAddPost} />
            </div>
            {postsArray}
        </div>
    );
}

export default MyPosts;