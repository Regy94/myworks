import React from 'react';
import { NavLink } from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import logo from '../../assets/images/Logo.png'

import styles from './Header.module.scss'

const Header = (props) => {

    const {isAuth, onLogOut, login} = props;

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <div className={styles.header__img}>
                    <img src={logo} className={styles.imgBlock} alt="logo"/>
                </div>
                <h1 className={styles.header__text}>Social Network</h1>
            </div>
            <div>
                {isAuth && <button className={styles.header__login} onClick={onLogOut}>Log Out</button>}
            </div>
            <div>
                {isAuth ? (
                    <div className={styles.header__userName}>
                        {login}
                    </div>
                ) : (
                    <NavLink className={styles.header__login} to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    );
}

export default hot(Header);