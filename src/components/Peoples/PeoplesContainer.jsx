import React from 'react';

import {disableBtnAC, followTC, unfollowTC, getUsers, changePageActionCreator} from './../../data/peoples-reducer';
import { connect } from 'react-redux';
import Peoples from './Peoples';
import { peoplesSelector, usersTotalCountSelector, currentPageSelector, pageSizeSelector, isLoadingSelector, disableIDsSelector } from '../../data/selectors/peoples-selector';

class PeoplesApiComponent extends React.Component{


    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    OnChangePage = (page) => {
        this.props.getUsers(page,this.props.pageSize);
        this.props.changePage(page);
    }

    render() {

        return <Peoples {...this.props} OnChangePage={this.OnChangePage}/>
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
    followTC: followTC,
    unfollowTC: unfollowTC,
    getUsers: getUsers,
    disableBtn: disableBtnAC,
    changePage: changePageActionCreator
})
    (PeoplesApiComponent);

export default PeoplesContainer;
