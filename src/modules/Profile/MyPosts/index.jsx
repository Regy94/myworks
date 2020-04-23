import React from 'react';

import AddNewPostForm from './AddNewPostForm'
import Post from './Post'

import styles from './MyPosts.module.css'

const MyPosts = (props) => {

    const {posts, addPost} = props;

    const postsArray = posts.map( ({header, text, id}) => <Post header={header} text={text} key={id} />)

    const handleAddPost = (data) => {
        addPost(data.postText)
    }

    return (
        <div className={styles.myposts}>
            <h3 className={styles.myposts__header}>My Posts</h3>
            <div className={styles.myposts__add}>
                <AddNewPostForm onSubmit={handleAddPost} />
            </div>
            {postsArray}
        </div>
    );
}

export default MyPosts;