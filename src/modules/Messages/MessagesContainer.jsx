import {connect} from 'react-redux';

import Messages from '.';

import {addNewMessageActionCreator} from '../../data/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/hoc';


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
            addNewMessage: (message) => {dispatch(addNewMessageActionCreator(message))}
    };
};

const withRedirectMessages = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (withRedirectMessages);

export default MessagesContainer;

