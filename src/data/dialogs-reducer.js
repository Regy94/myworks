
const dialogsReducer = (state, action) => {

    switch (action.type) {

        case 'ADD-NEW-MESSAGE':
            let NewMessage = {
                id: 5,
                name: 'Andrey',
                text: state.writtenMessageText,
                date: '04.03.2020'
            };
            state.dialogs.push(NewMessage);
            state.writtenMessageText='';
            return state;

        case 'CHANGE-MESSAGE-TEXT':
            state.writtenMessageText=action.newMessageText;
            return state;

        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({type: 'ADD-NEW-MESSAGE'});

export const changeMessageTextActionCreator = (text) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        newMessageText: text
    }
}

export default dialogsReducer;