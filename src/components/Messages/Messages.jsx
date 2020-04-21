import React from 'react';

import style from './Messages.module.css';
import Member from './Member/Member.jsx'
import MessageForm from './MessageForm';

const Messages = (props) => {

    let dialogsArray = props.dialogs.map(({ name, text, date }) => <Member name={name} message={text} date={date} /> );

    const onAddNewMessage = (data) => {
        props.addNewMessage(data.message)
    };

    return (
        <div className={style.messages} >
            <div className={style.newMessage}>
                <MessageForm onSubmit={onAddNewMessage} />
            </div>
            {dialogsArray}
        </div>
    );
}

export default Messages;