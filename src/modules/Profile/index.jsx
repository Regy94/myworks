import React from 'react';
import {hot} from 'react-hot-loader/root';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

import styles from './Profile.module.css'

const Profile = (props)=> {

    const {
        userId,
        profile,
        isLoading,
        isStatusLoading,
        status,
        updateStatus,
        updateProfile,
        toggleProfileUpdateLoading,
        updateProfilePhoto
    } = props;

    return(
        <div className={styles.profile}>
            <ProfileInfo
                profile={profile}
                isLoading={isLoading}
                status={status}
                updateStatus={updateStatus}
                isStatusLoading={isStatusLoading}
                updateProfile={updateProfile}
                toggleProfileUpdateLoading={toggleProfileUpdateLoading}
                updateProfilePhoto={updateProfilePhoto}
                userId={userId}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default hot(Profile);