import React from 'react';

import styles from './Contacts.module.scss';

const Contacts = ({contactType, contactLink}) => {

    const getIcon = (type) => {
        const icons = {
            facebook: 'fa fab fa-facebook',
            vk: 'fa fab fa-vk',
            github: 'fa fab fa-github',
            instagram: 'fa fab fa-instagram',
            twitter: 'fa fab fa-twitter',
            youtube: 'fa fab fa-youtube'
        }

        return icons[type]
    }

    const icon = getIcon(contactType);

    return (
        <div className={styles.contacts}>
            <a href={`https://${contactLink}`} className={styles.contacts__icon}><i className={icon}></i></a>
        </div>
    )
}

export default Contacts;

