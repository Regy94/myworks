import React from 'react';
import styles from './ProfileTitle.module.css';
import photo from '../../../../assets/images/user.png'

const ProfileTitle = (props) => {

    return (
            <div className={styles.title}>
                <div className={styles.photo}>
                    <img src={props.profile.photos?.large ? props.profile.photos.large : photo} alt='' className={styles.photo__img}/>
                    {/* <button className={styles.photo__btn}>Change photo</button> */}
                </div>
                <div className={styles.title__name}>{props.profile.fullName}</div>
                <div className={styles.title__btn}>
                    <button>Write message</button>
                </div>
            </div>
    )
}

export default ProfileTitle;

