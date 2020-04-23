import React from 'react';
import { Field, reduxForm} from 'redux-form';

import InputForm from '../common/fieldForms/InputForm/';
import Loader from '../common/Loader'

import { maxLength, required } from '../../helpers/validators';

import styles from './LoginForm.module.css';

const messageLength = maxLength(30);

const LoginForm = (props) => {

    const {isLoading, errorMessages} = props;

    return (
        <div className={styles.loginform}>
            {
                isLoading ? (
                    <div className={styles.peoples__loader}><Loader /> </div>
                ) : (
                    <form className={styles.form} onSubmit={props.handleSubmit} >
                        <Field placeholder="E-mail" component={InputForm} name="email" validate={[required,messageLength]}/>
                        <Field placeholder="Password" component={InputForm} name="pass" validate={[required,messageLength]} type="password" />
                        {errorMessages.length!==0 && <div className={styles.form__message}>{errorMessages}</div>}
                        <div className={styles.form__item}>
                            <div className={styles.form__remember}>Remember me:</div>
                            <Field component={"input"} type={"checkbox"} name="remember"/>
                        </div>
                        <button>Login</button>
                    </form>
                )
            }
        </div>
    )
}

export default reduxForm({form: 'login'})(LoginForm);