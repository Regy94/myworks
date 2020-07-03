import React from 'react';
import classNames from 'classnames/bind';

import styles from './Member.module.scss';

const Member = (props) => {

    const cx = classNames.bind(styles);

    const { name, message, date, isNewMessages, id, deleteMessageRequest } = props;

    const messageBodyClassName = cx (
        'message__body', {
            newMessage: isNewMessages
        }
    );

    const handleDeleteMessage = () => {
        deleteMessageRequest(id)
    }

    return (
        <div className={styles.message}>
            <div className={styles.message__user}>{name}</div>
            <div className={messageBodyClassName}>
                <div className={styles.message__text}>{message}</div>
                <div className={styles.message__other}>
                    <button className={styles.message__del} onClick={handleDeleteMessage} >
                        <i className="fa fas fa-times"></i>
                    </button>
                    <div className={styles.message__date}>{date}</div>
                </div>
            </div>
        </div>
    );
}

export default Member;