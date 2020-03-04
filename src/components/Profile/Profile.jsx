import React from 'react';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props)=> {
    return(
        <div className={c.profile}>
            <div className={c.profile__info}>This place will be my info</div>
            <MyPosts state={props.state.posts} writtenPostText={props.state.writtenPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;