import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Contacts from './Contacts';
import Button from '../../../../components/common/Button'

import styles from './ProfileInfoData.module.scss';
import InfoString from './InfoString';

const ProfileInfoData = (props) => {

    const {profile, isUserProfile, setEditMode} = props;

    const [isloadingInfo, setLoadingInfo] = useState(true)

    const { isLoading } = props

    const handleToggleEditMode = () => {setEditMode(true)}

    useEffect ( () => {
        if (isLoading === false) {
            setLoadingInfo(false)
        }
    }, [isLoading] )

    return (
        !isloadingInfo &&
        <div className={styles.info}>
            <div className={styles.info__btn}>{isUserProfile && <Button size="s" onClick={handleToggleEditMode}>Edit</Button>}</div>

            <div className={styles.info__main}>
                <InfoString value={profile.aboutMe}>About me</InfoString>
                <InfoString value={profile.fullName}>FullName</InfoString>

                <div className={styles.info__contacts}>
                    <div className={styles.info__contactsTitle}>Contacts:</div> {
                        Object.keys(profile.contacts).map(key =>
                            profile.contacts[key] && <Contacts key={key} contactType={key} contactLink={profile.contacts[key]} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfoData;

