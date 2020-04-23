import React from 'react';

import styles from './Member.module.css';

const Member = (props) => {

    const { name,message,date } = props;

    return (
        <div className={styles.member}>
            <div className={styles.member__name}>{name}</div>
            <div className={styles.member__message}>
                <div className={styles.member__text}>{message}</div>
                <div className={styles.member__date}>{date}</div>
            </div>
        </div>
    );
}

export default Member;