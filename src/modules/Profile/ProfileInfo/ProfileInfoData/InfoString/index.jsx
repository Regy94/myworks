import React from 'react';

import styles from './InfoString.module.scss';

const InfoString = (props) => {

    const {children, value} = props;

    return (
        <div className={styles.string}>
            <div className={styles.string__title}>{children}:</div>
            <div className={styles.string__value}>{value}</div>
        </div>
    )
}

export default InfoString;

