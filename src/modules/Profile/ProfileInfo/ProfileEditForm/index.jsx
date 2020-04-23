import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './ProfileEditForm.module.css'

const ProfileEditForm = (props) => {

    const {error, profile, } = props;

    return (
        <div className={styles.form}>
            <form onSubmit={props.handleSubmit}>
                {error && <div className={styles.form__error}>{error}</div>}
                <button>Save</button>
                <div className={styles.form__about}>About me:
                    <Field name="aboutMe" component="input"/>
                </div>
                <div className={styles.form__about}>My skills:
                    <Field name="lookingForAJobDescription" component="input"/>
                </div>
                <div className={styles.form__about}>Fullname:
                    <Field name="fullName" component="input"/>
                </div>
                <div>
                    Contacts: {
                        Object.keys(profile.contacts).map( key => {
                            return (
                                <div className={styles.contacts} key={key}>
                                <div className={styles.contacts__key}>{key}:</div>
                                    <Field className={styles.contacts__name} name={`contacts.${key}`} component="input"/>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: 'profileEditForm'})(ProfileEditForm);

