import React from 'react';

import Textarea from '../../../components/common/fieldForms/Textarea';
import Button from '../../../components/common/Button/index'

import { Field, reduxForm } from 'redux-form';

import styles from './MessageForm.module.css'

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <div className={styles.form__field}>
                <Field width="long" component={Textarea} placeholder="Enter message..." name="text"/>
            </div>
            <div className={styles.form__btn} >
                <Button>Sent</Button>
            </div>
        </form>
)
}

export default reduxForm({form: 'AddMessageForm'})(MessageForm)