
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {

        dialogsPage: {

            dialogs: [
                { id: 1 , name: 'Nikita', text: 'Hi, how are you?', date: '18.02.2020'},
                { id: 2 , name: 'Sergey', text: 'Whaaaaat?', date: '15.02.2020'},
                { id: 3 , name: 'Sam', text: 'yes', date: '10.02.2020'},
                { id: 4 , name: 'Tom', text: 'goodluck!', date: '13.02.2020'}
            ],

            writtenMessageText: ''

        },

        ProfilePage: {

            posts: [
                {id: 1, header: 'Header 1', text:'Any text here'},
                {id: 2, header: 'Header 2', text:'This is my first post'}
            ],

            writtenPostText: ''
        }
    },

    dispatch (action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);

        this._reRender(this._state);
    },

    getState() {
        return this._state;
    },

    _reRender () {},

    subscribe (observer) {
        this._reRender=observer;
    }

};

export default store;
