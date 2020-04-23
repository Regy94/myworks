import React from 'react';

import styles from './Contacts.module.css';

const Contacts = ({contactTitle, contactValue}) => {

    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__title}>{contactTitle}:</div>
            <div>{contactValue}</div>
        </div>
    )
}

export default Contacts;

