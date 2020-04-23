import React from 'react';

import image from './images/404.png';
import styles from './NotFound.module.scss';

const NotFound = () => {

    return (
        <div className={styles.error}>
            <h1 className={styles.error__title}>Error 404 page not found</h1>
            <img className={styles.error__img} src={image} alt=""/>
        </div>
    )
}

export default NotFound