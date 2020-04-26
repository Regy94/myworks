import React from 'react';

import LoginFormContainer from './LoginFormContainer';

import styles from './LoginForm.module.scss';

const Login = (props) => {

    return (
        <div>
            <h1 className={styles.title}>Login</h1>
            <LoginFormContainer />
        </div>
    )
}

export default Login;