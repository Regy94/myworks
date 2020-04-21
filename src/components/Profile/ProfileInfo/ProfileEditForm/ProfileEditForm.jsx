import React from 'react';

import styles from './ProfileEditForm.module.css'
import { Field, reduxForm } from 'redux-form';

const ProfileEditForm = (props) => {


    return (
        <div className={styles.form}>
            <form onSubmit={props.handleSubmit}>
                {props.error && <div className={styles.form__error}>{props.error}</div>}
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
                    Contacts: {Object.keys(props.profile.contacts).map( key => {
                            return <div className={styles.contacts}>
                                <div className={styles.contacts__key}>{key}:</div>
                                <Field className={styles.contacts__name} name={`contacts.${key}`} component="input"/>
                            </div>
                        }
                    )}
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: "profileEditForm"})(ProfileEditForm);

