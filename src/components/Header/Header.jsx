import React from 'react';
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.header__logo}>
                <div className={c.header__img}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/600px-Oikya_Front_Logo.png' className={c.imgBlock} alt=""/>
                </div>
                <h1 className={c.header__text}>MySite</h1>
            </div>
        </header>
    );
}

export default Header;