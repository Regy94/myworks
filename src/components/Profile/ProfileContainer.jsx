import React from 'react';

import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileTC, getStatusTC, updateStatusTC, updateProfileTC, updateProfilePhotoTC } from '../../data/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/hoc';
import { compose } from 'redux';
import { profileSelector, isLoadingSelector, statusSelector, isStatusLoadingSelector, errorUpdateProfileSelector, toggleProfileUpdateLoadingSelector } from '../../data/selectors/profile-selectors';
import { userIdSelector } from '../../data/selectors/auth-selectors';

class ProfileApiContainer extends React.Component {

    getUser() {
        this.props.getProfile(this.props.match.params.userId);
        this.props.getStatus(this.props.match.params.userId)
    }

    componentDidMount() {
        this.getUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userId!==this.props.match.params.userId) {
            this.getUser()
        }
    }

    render () {

        if(!this.props.isAuth) return <Redirect to={"/login"} />

        return <Profile
            profile={this.props.profile}
            isLoading={this.props.isLoading}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isStatusLoading={this.props.isStatusLoading}
            updateProfile={this.props.updateProfile}
            toggleProfileUpdateLoading={this.props.toggleProfileUpdateLoading}
            updateProfilePhoto={this.props.updateProfilePhoto}
            userId={this.props.userId}
            />
    }
}

const mapStateToProps= (state) => {
    return {
        profile: profileSelector(state),
        isLoading: isLoadingSelector(state),
        isAuth: state.auth.isAuth,
        status: statusSelector(state),
        isStatusLoading: isStatusLoadingSelector(state),
        errorUpdateProfile: errorUpdateProfileSelector(state),
        toggleProfileUpdateLoading: toggleProfileUpdateLoadingSelector(state),
        userId: userIdSelector(state)
    }
}

// const withRedirectProfile = withAuthRedirect(ProfileApiContainer)

// const withRouteProfileContainer = withRouter(withRedirectProfile);

// const ProfileContainer = connect(mapStateToProps, {profileTC: profileTC})(withRouteProfileContainer)

export default compose(
        withAuthRedirect,
        withRouter,
         connect(mapStateToProps,
            {
                getProfile: getProfileTC,
                getStatus: getStatusTC,
                updateStatus: updateStatusTC,
                updateProfile: updateProfileTC,
                updateProfilePhoto: updateProfilePhotoTC
            })
        )
    (ProfileApiContainer)