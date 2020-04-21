import React from 'react';
import styles from './Header.module.css'

import logo from '../../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <div className={styles.header__img}>
                    <img src={logo} className={styles.imgBlock} alt=""/>
                </div>
                <h1 className={styles.header__text}>MySite</h1>
            </div>
            <div>
                {props.isAuth && <button className={styles.header__login} onClick={props.onLogOut} >Log Out</button>}
            </div>
            <div>
                {props.isAuth?props.login:<NavLink className={styles.header__login} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;