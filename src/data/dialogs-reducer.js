
const initialState={
    dialogs: [
        { id: 1 , name: 'Nikita', text: 'Hi, how are you?', date: '18.02.2020'},
        { id: 2 , name: 'Sergey', text: 'Whaaaaat?', date: '15.02.2020'},
        { id: 3 , name: 'Sam', text: 'yes', date: '10.02.2020'},
        { id: 4 , name: 'Tom', text: 'goodluck!', date: '13.02.2020'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD-NEW-MESSAGE':
            return {
                ...state,
                dialogs: [...state.dialogs, {id:5, name: 'Andrey', text: action.message, date: '06.03.2020'}],
                writtenMessageText: ''
            }

        default:
            return state;
    }
}

export const addNewMessageActionCreator = (message) => ({type: 'ADD-NEW-MESSAGE', message});

export default dialogsReducer;