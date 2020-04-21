import React from 'react';

import styles from './ProfileInfo.module.css'
import Loader from '../../common/loader/loader';
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';
import ProfileTitle from './ProfileTitle/ProfileTitile'
import ProfileContainerData from './ProfileContainerData';
import { withRouter } from 'react-router-dom';

const ProfileInfo = (props) => {

    const isUserProfile = props.userId===+props.match.params.userId;

    return (
        <div className={styles.info}>
            {
                props.isLoading
                    ? (<div className={styles.info__loader}><Loader /></div>)
                    : (
                        <>
                            <ProfileTitle {...props} updateProfilePhoto={props.updateProfilePhoto} isUserProfile={isUserProfile}/>
                            <ProfileStatusHook
                                status={props.status}
                                updateStatus={props.updateStatus}
                                isStatusLoading={props.isStatusLoading}
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

