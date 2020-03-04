import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import {addPostActionCreator, updatePostTextActionCreator} from './../../../data/profile-reducer'

const MyPosts = (props) => {

    let postsArray = props.state.map( ({header, text}) => <Post header={header} text={text} />)

    let newPost = React.createRef();

    let addPost = () => { props.dispatch(addPostActionCreator()) }

    let updatePostText = () => {
        let updatedText = newPost.current.value;
        let action = updatePostTextActionCreator(updatedText);
        props.dispatch(action);
        //props.dispatch({type: 'UPDATE-POST-TEXT', newPostText: updatedText});
    }

    return (
        <div className={c.myposts}>
            <h3 className={c.myposts__header}>My Posts</h3>
            <div className={c.myposts__add}>
                <textarea onChange={updatePostText} value={props.writtenPostText} ref={newPost} />
                <button onClick={addPost}>Add post</button>
            </div>
            {postsArray}
        </div>
    );
}

export default MyPosts;