import React from 'react';

import style from './NewMessage.module.css';
import {addNewMessageActionCreator, changeMessageTextActionCreator} from './../../../data/dialogs-reducer';

const NewMessage = (props) => {

    // let NewTextMessage = React.createRef();

    const changeMessageText = (event) => {
        let writtenText = event.target.value;
        props.dispatch(changeMessageTextActionCreator(writtenText));
    };

    const addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };

    return (
        <div className={style.newMessage}>
            <textarea className={style.newMessage__text} value={props.writtenMessageText} onChange={changeMessageText} placeholder='Enter message...'/>
            <button className={style.newMessage__btn} onClick={addNewMessage} >Sent</button>
        </div>
    )
}

export default NewMessage;