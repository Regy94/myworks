import React from 'react';
import { Field, reduxForm} from 'redux-form';

import styles from './LoginForm.module.css';
import Loader from '../common/loader/loader'
import { maxLength, required } from '../../helpers/validators';
import { InputForm } from '../common/fieldForms/TextareaForm';

const messageLength = maxLength(30);

const LoginForm = (props) => {

    return (
        <div className={styles.loginform}>
            {
            props.isLoading?<div className={styles.peoples__loader}><Loader /> </div>

            :<form className={styles.form} onSubmit={props.handleSubmit} >
                <Field placeholder='E-mail' component={InputForm} name="email" validate={[required,messageLength]}/>
                <Field placeholder='Password' component={InputForm} name="pass" validate={[required,messageLength]} type="password" />
                {props.errorMessages.length!==0 && <div className={styles.form__message}>{props.errorMessages}</div>}
                <div className={styles.form__item}>
                    <div className={styles.form__remember}>Remember me:</div>
                    <Field component={"input"} type={"checkbox"} name="remember"/>
                </div>
                <button>Login</button>
            </form>
            }
        </div>
    )
}

const LoginReduxForm =  reduxForm({form: "login"})(LoginForm)

export default LoginReduxForm;