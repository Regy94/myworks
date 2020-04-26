import React from 'react';

import styles from './Button.module.scss'

const Button = (props) => {

    const {children, onClick, size} = props;

    return (
        <button className={`${styles.btn} ${styles[size]}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button