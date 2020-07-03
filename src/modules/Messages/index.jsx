import React from 'react';
import { useEffect } from 'react';
import {hot} from 'react-hot-loader/root';

import Member from './Member'
import MessageForm from './MessageForm';

import style from './Messages.module.css';

const Messages = (props) => {

    const { dialogs, sentMessageRequest, deleteMessageRequest, fetchMessagesRequest } = props

    useEffect(() => {
        fetchMessagesRequest()
    }, [])

    const dialogsArray = dialogs.map(
        ({ isNewMessages, name, text, date, id }) => 
            <Member 
                isNewMessages={isNewMessages} 
                name={name} message={text} 
                date={date} 
                key={id}
                id={id} 
                deleteMessageRequest={deleteMessageRequest} />
    );

    const handleAddNewMessage = (data) => {
        sentMessageRequest(data)
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