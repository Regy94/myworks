import React from 'react';

import c from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=> {
    return(
        <div className={c.profile}>
            <ProfileInfo
                profile={props.profile}
                isLoading={props.isLoading}
                status={props.status}
                updateStatus={props.updateStatus}
                isStatusLoading={props.isStatusLoading}
                updateProfile={props.updateProfile}
                toggleProfileUpdateLoading={props.toggleProfileUpdateLoading}
                updateProfilePhoto={props.updateProfilePhoto}
                userId={props.userId}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;