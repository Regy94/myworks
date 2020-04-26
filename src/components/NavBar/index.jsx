import React from 'react';
import {hot} from 'react-hot-loader/root';
import Link from './Link';

import styles from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to={'/profile/'+props.id}>My page</Link>
            <Link to="/news">News</Link>
            <Link to="/messages">Messages</Link>
            <Link to='/peoples'>Peoples</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
}

export default hot(NavBar);