import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { logOutUserTC } from '../../data/auth-reducer';
import { loginSelector, isAuthSelector } from '../../data/selectors/auth-selectors';

class HeaderComponentApi extends React.Component{

    onLogOut = () => {
        this.props.logOutUserTC()
    }

    render() {
        return (
            <Header {...this.props} onLogOut={this.onLogOut} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: isAuthSelector(state),
        login: loginSelector(state)
    }
}

const HeaderContainer= connect(mapStateToProps, {
    logOutUserTC: logOutUserTC
})(HeaderComponentApi)

export default HeaderContainer;