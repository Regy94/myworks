import React from 'react';
import { Field, reduxForm} from 'redux-form';

import Loader from '../common/Loader'
import Input from '../common/fieldForms/Input';
import AnyButton from '../common/AnyButton';

import { maxLength, required } from '../../helpers/validators';

import styles from './LoginForm.module.scss';

const messageLength = maxLength(30);

const LoginForm = (props) => {

    const {isLoading, errorMessages} = props;

    const isError = errorMessages.length!==0

    return (
        <div className={styles.loginform}>
            {
                isLoading ? (
                    <div className={styles.peoples__loader}><Loader /> </div>
                ) : (
                    <form className={styles.form} onSubmit={props.handleSubmit} >

                        <div className={styles.form__item}>
                            <Field
                                labelText="E-mail"
                                component={Input}
                                name="email"
                                validate={[required,messageLength]}
                                isCombine={true}
                            />
                        </div>
                        <div className={styles.form__item}>
                            <Field
                                labelText="Password"
                                component={Input}
                                name="pass"
                                validate={[required,messageLength]}
                                type="password"
                                isCombine={true}
                            />
                        </div>

                        {isError && <div className={styles.form__message}>{errorMessages}</div>}

                        <div className={styles.form__check}>
                            <div className={styles.form__remember}>Remember me:</div>
                            <Field component={"input"} type={"checkbox"} name="remember"/>
                        </div>

                        <AnyButton>Login</AnyButton>

                    </form>
                )
            }
        </div>
    )
}

export default reduxForm({form: 'login'})(LoginForm);