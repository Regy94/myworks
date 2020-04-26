import React from 'react';
import {hot} from 'react-hot-loader/root';

import Member from './Member'
import MessageForm from './MessageForm';

import style from './Messages.module.css';

const Messages = (props) => {

    const { dialogs, addNewMessage } = props

    const dialogsArray = dialogs.map(
        ({ isNewMessages, name, text, date, id }) => <Member isNewMessages={isNewMessages} name={name} message={text} date={date} key={id} />
    );

    const handleAddNewMessage = (data) => {
        addNewMessage(data.message)
    };

    return (
        <div className={style.messages} >
            <div className={style.newMessage}>
                <MessageForm onSubmit={handleAddNewMessage} />
            </div>

            {dialogsArray}
        </div>
    );
}

export default hot(Messages);