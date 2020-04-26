import React from 'react';

import styles from './AnyButton.module.scss'

const AnyButton = (props) => {

    const {children, onClick, size} = props;

    return (
        <button className={`${styles.btn} ${styles[size]}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default AnyButton