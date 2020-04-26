import React from 'react';

import { Field, reduxForm } from 'redux-form';
import Button from '../../../../components/common/Button';
import Textarea from '../../../../components/common/fieldForms/Textarea';

import styles from './AddNewPostForm.module.css'

const AddNewPostForm = ({handleSubmit}) => {

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__field}><Field placeholder="Write post message..." width="long" autosize={true} component={Textarea} name="postText"/></div>
            <div className={styles.form__btn}><Button size="s">Add post</Button></div>
        </form>
    )
}

export default reduxForm({form: 'newPostForm'})(AddNewPostForm)
