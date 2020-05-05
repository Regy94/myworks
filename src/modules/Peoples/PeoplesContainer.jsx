import React from 'react';
import { connect } from 'react-redux';

import Peoples from '.';

import {disableBtnAC, followTC, unfollowTC, getUsers, changePageActionCreator, unmountPageAC} from '../../data/peoples-reducer';
import {
    peoplesSelector,
    usersTotalCountSelector,
    currentPageSelector,
    pageSizeSelector,
    isLoadingSelector,
    disableIDsSelector
} from '../../data/selectors/peoples-selector';

class PeoplesApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    componentWillUnmount() {
        this.props.unmountPage();
    }

    handleChangePage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.changePage(page);
    }

    render() {

        return <Peoples {...this.props} handleChangePage={this.handleChangePage}/>
    }
}

const mapStateToProps = (state) => {
    return {
        peoples: peoplesSelector(state),
        usersTotalCount: usersTotalCountSelector(state),
        currentPage: currentPageSelector(state),
        pageSize: pageSizeSelector(state),
        isLoading: isLoadingSelector(state),
        disableIDs: disableIDsSelector(state)
    };
};

const PeoplesContainer = connect (mapStateToProps, {
    follow: followTC,
    unfollow: unfollowTC,
    getUsers: getUsers,
    disableBtn: disableBtnAC,
    changePage: changePageActionCreator,
    unmountPage: unmountPageAC
})
    (PeoplesApiComponent);

export default PeoplesContainer;
