import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './ProfileEditForm.module.scss'
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/fieldForms/Input';

import { required } from '../../../../helpers/validators';

const ProfileEditForm = (props) => {

    const {error, profile, } = props;

    return (
        <div className={styles.form}>
            <form onSubmit={props.handleSubmit}>

                {error && <div className={styles.form__error}>{error}</div>}

                <Button size="s">Save</Button>

                <Field name="aboutMe" labelText="About me:" validate={[required]} component={Input}/>
                <Field name="lookingForAJobDescription" labelText="My skills:" validate={[required]} component={Input}/>
                <Field name="fullName" labelText="Fullname:" validate={[required]} component={Input}/>

                <div className={styles.form__contacts}>
                    <span>Contacts:</span> {
                        Object.keys(profile.contacts).map( key => {
                            return (
                                <Field className={styles.contacts__name} labelText={key}  name={`contacts.${key}`} component={Input}/>
                            )
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default reduxForm({form: 'profileEditForm'})(ProfileEditForm);

