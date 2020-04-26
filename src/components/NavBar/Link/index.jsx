import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Link.module.scss';

const Link = (props) => {

    const { children, to } = props;

    return (
            <NavLink to={to} className={styles.navLink} activeClassName={styles.active}>{children}</NavLink>
    )
}

export default Link;