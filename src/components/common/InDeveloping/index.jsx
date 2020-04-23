import React from 'react';

import image from './images/inDevelop2.png';
import styles from './InDeveloping.module.scss';

const InDeveloping = () => {

    return (
        <div className={styles.develop}>
            <h1 className={styles.develop__title}>Sorry, module on developing!</h1>
            <img className={styles.develop__img} src={image} alt="in developing"/>
        </div>
    )
}

export default InDeveloping