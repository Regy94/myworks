import React from 'react';
import c from './Messages.module.css';
import Member from './components/Member.jsx'
import NewMessage from './components/NewMessage'

const Messages = (props) => {

    let dialogsArray = props.state.dialogs.map(({ name, text, date }) => <Member name={name} message={text} date={date} /> );

    return (
        <div className={c.messages}>
            <NewMessage dispatch={props.dispatch} writtenMessageText={props.state.writtenMessageText} />
            {dialogsArray}
        </div>
    );
}

export default Messages;