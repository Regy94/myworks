import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

import { authUserTC, getMeInformationTC } from '../../data/auth-reducer';
import { errorMessagesSelector, isAuthSelector, userIdSelector } from '../../data/selectors/auth-selectors';
import { isLoadingSelector } from '../../data/selectors/auth-selectors';

class LoginFormContainer extends React.Component {

    onSubmit =(formData) => {
        this.props.authUser(formData)
    }

    render() {

        return (
            this.props.id ? (
                 <Redirect to={`/profile/${this.props.id}`} />
            ) : (
                <LoginForm onSubmit={this.onSubmit} isLoading={this.props.isLoading} errorMessages={this.props.errorMessages}/>
            )
        )
    }
}

const mapStateToProps = (state) => {

    return {
        errorMessages: errorMessagesSelector(state),
        isAuth: isAuthSelector(state),
        isLoading: isLoadingSelector(state),
        id: userIdSelector(state)
    }
}

export default connect(mapStateToProps, {
    authUser: authUserTC,
    getMeInformation: getMeInformationTC
})(LoginFormContainer)
