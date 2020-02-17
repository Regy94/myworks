import React from 'react';
import c from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={c.navbar}>
            <div className={c.navbar__item}>
                <NavLink className={c.navbar__link} to="/profile" activeClassName={c.active}>My page</NavLink>
            </div>
            <div className={c.navbar__item}>
                <NavLink className={c.navbar__link} to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.navbar__item}>
                <NavLink className={c.navbar__link} to="/messages" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.navbar__item}>
                <NavLink className={c.navbar__link} to="/settings" activeClassName={c.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;