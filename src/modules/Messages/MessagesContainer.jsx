import {connect} from 'react-redux';

import Messages from '.';
import { sentMessageRequest, deleteMessageRequest, fetchMessagesRequest } from '../../data/dialogsReducer'

import { withAuthRedirect } from '../../hoc/hoc';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth
    }
};

export default compose(
        connect(mapStateToProps, { sentMessageRequest, deleteMessageRequest, fetchMessagesRequest } ),
        withAuthRedirect
    )(Messages)