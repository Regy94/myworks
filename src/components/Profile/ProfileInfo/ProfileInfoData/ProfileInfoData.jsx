import React, { useEffect, useState } from 'react';
import styles from './ProfileInfoData.module.css';

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__title}>{contactTitle}:</div><div>{contactValue}</div>
        </div>
    )
}

const ProfileInfoData = (props) => {

    const [isloadingInfo, setLoadingInfo] = useState(true)

    const {  isLoading } = props

    useEffect ( () => {
        if (isLoading === false) {
            setLoadingInfo(false)
        }
    }, [isLoading] )

    return (
        !isloadingInfo &&
        <div className={styles.info}>
            {props.isUserProfile && <button onClick={() => props.setEditMode(true)}>Edit</button>}
            <div className={styles.info__about}>About me: {props.profile.aboutMe}</div>
            <div className={styles.info__about}>My skills: {props.profile.lookingForAJobDescription}</div>
            <div className={styles.info__about}>FullName: {props.profile.fullName}</div>
            <div className={styles.info__contacts}>
                Contacts: {
                        Object.keys(props.profile.contacts).map(key => {
                        return props.profile.contacts[key] && <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

export default ProfileInfoData;

