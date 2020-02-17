import React from 'react';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = ()=> {
    return(
        <div className={c.profile}>
            <MyPosts/>
        </div>
    );
}

export default Profile;