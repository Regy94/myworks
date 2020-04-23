import React from 'react';
import {NavLink} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import styles from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__item}>
                <NavLink className={styles.navbar__link} to={'/profile/'+props.id} activeClassName={styles.active}>My page</NavLink>
            </div>
            <div className={styles.navbar__item}>
                <NavLink className={styles.navbar__link} to="/news" activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.navbar__item}>
                <NavLink className={styles.navbar__link} to="/messages" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.navbar__item}>
                <NavLink className={styles.navbar__link} to='/peoples' activeClassName={styles.active}>Peoples</NavLink>
            </div>
            <div className={styles.navbar__item}>
                <NavLink className={styles.navbar__link} to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default hot(NavBar);