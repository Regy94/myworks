import React from 'react';

import c from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';

const AddNewPostForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field  component="textarea" name="postText"/>
                <button>Add post</button>
            </form>
        </div>
    )
}

const AddNewPostReduxForm = reduxForm({form: "newPostForm"})(AddNewPostForm)


const MyPosts = (props) => {
    let postsArray = props.posts.map( ({header, text}) => <Post header={header} text={text} />)

    let onAddPost = (data) => {
        props.addPost(data.postText)
    }


    return (
        <div className={c.myposts}>
            <h3 className={c.myposts__header}>My Posts</h3>
            <div className={c.myposts__add}>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div>
            {postsArray}
        </div>
    );
}


export default MyPosts;