import React from 'react';
import styles from './ProfileTitle.module.css';
import photo from '../../../../assets/images/user.png'

const ProfileTitle = (props) => {

    const onPhotoChange = (event) => {
        if(event.target.files.length) {
            props.updateProfilePhoto(event.target.files[0])
        }
    }

    return (
            <div className={styles.title}>
                <div className={`${styles.photo} ${ props.isUserProfile ? styles.photo__user : ""}`}>
                    <img src={props.profile.photos?.large ? props.profile.photos.large : photo} alt='' className={styles.photo__img}/>
                    {
                        props.isUserProfile &&
                        <div className={styles.photo__file}>
                            <input type="file" id="choosePhoto" className={styles.photo__input} onChange={onPhotoChange}/>
                            <label for="choosePhoto" className={styles.photo__label}>Change photo</label>
                        </div>
                    }
                </div>
                <div className={styles.title__name}>{props.profile.fullName}</div>
                <div className={styles.title__btn}>
                    <button>Write message</button>
                </div>
            </div>
    )
}

export default ProfileTitle;

