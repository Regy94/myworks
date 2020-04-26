import React from 'react';

import photo from '../../../../assets/images/user.png'
import Button from '../../../../components/common/Button'

import styles from './ProfileTitle.module.scss';

const ProfileTitle = (props) => {

    const {profile, isUserProfile, updateProfilePhoto} = props;

    const handlePhotoChange = (event) => {
        if(event.target.files.length) {
            updateProfilePhoto(event.target.files[0])
        }
    }

    const userPhoto = profile.photos?.large ? profile.photos.large : photo;

    return (
            <div className={styles.title}>

                <div className={`${styles.photo} ${ isUserProfile ? styles.photo__user : ""}`}>
                    <img src={userPhoto} alt="" className={styles.photo__img}/>
                    {
                        isUserProfile &&
                        <div className={styles.photo__file}>
                            <input type="file" id="choosePhoto" className={styles.photo__input} onChange={handlePhotoChange}/>
                            <label for="choosePhoto" className={styles.photo__label}>Change photo</label>
                        </div>
                    }
                </div>

                <div className={styles.title__name}>{profile.fullName}</div>

                <div className={styles.title__btn}>
                    <Button size="s">Write message</Button>
                </div>
            </div>
    )
}

export default ProfileTitle;

