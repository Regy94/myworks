import React from 'react';
import c from './Member.module.css';

const Member = (props) => {
    return (
        <div className={c.member}>
            <div className={c.member__name}>{props.name}</div>
            <div className={c.member__message}>
                <div className={c.member__text}>{props.message}</div>
                <div className={c.member__date}>{props.date}</div>
            </div>
        </div>
    );
}

export default Member;