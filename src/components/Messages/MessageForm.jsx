import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../helpers/validators';
import { TextareaForm } from '../common/fieldForms/TextareaForm';
import styles from './MessageForm.module.css'

const messageLength = maxLength(10);

const MessageForm = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit} className={styles.form}>
                <Field component={TextareaForm} placeholder='Enter message...' name="message" validate={[messageLength]}/>
                <button>Sent</button>
            </form>
        </div>
    )
}

export default reduxForm({form: "AddMessageForm"})(MessageForm)