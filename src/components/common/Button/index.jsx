import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss'

const Button = (props) => {

    const cx = classNames.bind(styles);

    const {children, onClick, size, isActive} = props;

    const buttonClassName = cx (
        'btn', [size], {
            activeBtn: isActive
        }
    );

    return (
        <button className={buttonClassName} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button