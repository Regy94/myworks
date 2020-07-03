import { createActions, handleActions } from 'redux-actions';

const initialState={
    dialogs: []
};

export const {
    sentMessageRequest,
    addMessage,
    deleteMessageRequest,
    deleteMessage,
    fetchMessagesRequest,
    setMessages
} = createActions({
    'SENT_MESSAGE_REQUEST': undefined,
    'ADD_MESSAGE': undefined,
    'DELETE_MESSAGE_REQUEST': undefined,
    'DELETE_MESSAGE': undefined,
    'FETCH_MESSAGES_REQUEST': undefined,
    'SET_MESSAGES': undefined
})

export default handleActions ({
        [setMessages]: (state, {payload}) => {
            return {
                ...state,
                dialogs: payload
            }
        },
        [addMessage]: (state, {payload}) => {
            return {
                ...state,
                dialogs: [...state.dialogs, payload]
            }
        },
        [deleteMessage]: (state,{payload}) => {
            return {
                ...state,
                dialogs: state.dialogs.filter( messageId => messageId.id !== payload )
            }
        }
    },
    initialState
)

// export const newMessageAction = (payload) => ({
//     type: 'DIALOGS-USAGE',
//     payload
// })

// const dialogsReducer = (state = initialState, action) => {

//     switch (action.type) {

//         case 'ADD_NEW_MESSAGE':
//             return {
//                 ...state,
//                 dialogs: [...state.dialogs, action.payload],
//             }

//         default:
//             return state;
//     }
// }

// export default dialogsReducer;