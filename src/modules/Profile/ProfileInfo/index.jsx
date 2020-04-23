import React from 'react';
import { withRouter } from 'react-router-dom';

import Loader from '../../../components/common/Loader';
import ProfileStatusHook from './ProfileStatus';
import ProfileTitle from './ProfileTitle'
import ProfileContainerData from './ProfileContainerData';

import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    const {userId, match, isLoading, isStatusLoading, status, updateStatus, updateProfilePhoto} = props;

    const isUserProfile = userId === +match.params.userId;

    return (
        <div className={styles.info}>
            {
                isLoading ? (
                        <div className={styles.info__loader}><Loader /></div>
                    ) : (
                        <>
                            <ProfileTitle {...props} updateProfilePhoto={updateProfilePhoto} isUserProfile={isUserProfile}/>
                            <ProfileStatusHook
                                status={status}
                                updateStatus={updateStatus}
                                isStatusLoading={isStatusLoading}
                                isUserProfile={isUserProfile}
                                />
                            <ProfileContainerData {...props} isUserProfile={isUserProfile}/>
                        </>
                    )
                }
        </div>
    )
}

export default withRouter(ProfileInfo);

