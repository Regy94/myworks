import React from 'react';

import styles from './ProfileInfo.module.css'
import Loader from '../../common/loader/loader';
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';
import ProfileTitle from './ProfileTitle/ProfileTitile'
import ProfileContainerData from './ProfileContainerData';

const ProfileInfo = (props) => {

    return (
        <div className={styles.info}>
            {
                props.isLoading
                    ? (<div className={styles.info__loader}><Loader /></div>)
                    : (
                        <>
                            <ProfileTitle {...props} updateProfilePhoto={props.updateProfilePhoto} />
                            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} isStatusLoading={props.isStatusLoading}/>
                            <ProfileContainerData {...props}/>
                        </>
                    )
                }
        </div>
    )
}

export default ProfileInfo;

