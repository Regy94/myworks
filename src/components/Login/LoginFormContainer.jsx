import React from 'react';
import { connect } from 'react-redux';
import { authUserTC, getMeInformationTC } from '../../data/auth-reducer';
import LoginReduxForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import { errorMessagesSelector, isAuthSelector, userIdSelector } from '../../data/selectors/auth-selectors';
import { isLoadingSelector } from '../../data/selectors/auth-selectors';

class LoginFormApiComponent extends React.Component {


    onSubmit =(FormData) => {
        this.props.authUser(FormData)
    }


    render() {

        return (
            this.props.id ? (
                 <Redirect to={`/profile/${this.props.id}`} />
            ) : (
                <LoginReduxForm onSubmit={this.onSubmit} isLoading={this.props.isLoading} errorMessages={this.props.errorMessages}/>
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
})(LoginFormApiComponent)
