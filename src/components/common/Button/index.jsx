import React from 'react';
import classNames from 'classnames/bind';
import {hot} from 'react-hot-loader/root';

import styles from './Button.module.scss'

const Button = (props) => {

    const cx = classNames.bind(styles);

    const {children, onClick, size, isActive, disabled} = props;

    const buttonClassName = cx (
        'btn', [size], {
            activeBtn: isActive
        }
    );

    return (
        <button disabled={disabled} className={buttonClassName} onClick={onClick}>
            {children}
        </button>
    )
}

export default hot (Button)