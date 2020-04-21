import React from 'react';

import styles from './loader.module.css'

const Loader = (props) => {

    const {size} = props;

    const getSize =  (type) => {
        const sizes = {
            s: 'small',
            m: 'medium',
            l: 'large',
            default: 'medium'
        };
        return (sizes[type] || sizes['default']);
    }

    const style = getSize(size);

    return(
        <div className={styles[`loader__${style}`]}>
            <div className={styles.loader__item} />
        </div>
    )
}

export default Loader;