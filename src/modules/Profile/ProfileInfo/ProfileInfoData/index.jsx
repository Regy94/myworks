import React, { useEffect, useState } from 'react';

import Contacts from './Contacts'

import styles from './ProfileInfoData.module.css';

const ProfileInfoData = (props) => {

    const {profile, isUserProfile, setEditMode} = props;

    const [isloadingInfo, setLoadingInfo] = useState(true)

    const { isLoading } = props

    useEffect ( () => {
        if (isLoading === false) {
            setLoadingInfo(false)
        }
    }, [isLoading] )

    return (
        !isloadingInfo &&
        <div className={styles.info}>
            {isUserProfile && <button onClick={() => setEditMode(true)}>Edit</button>}

            <div className={styles.info__about}>About me: {profile.aboutMe}</div>
            <div className={styles.info__about}>My skills: {profile.lookingForAJobDescription}</div>
            <div className={styles.info__about}>FullName: {profile.fullName}</div>

            <div className={styles.info__contacts}>
                Contacts: {
                    Object.keys(profile.contacts).map(key =>
                        profile.contacts[key] && <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    )
                }
            </div>
        </div>
    )
}

export default ProfileInfoData;

