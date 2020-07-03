import { combineReducers } from "redux";

import appReducer from './app-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogsReducer';
import peoplesReducer from '../modules/Peoples/reducers/index';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form'

const allReducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    dialogsPage: dialogsReducer,
    peoplesPage: peoplesReducer,
    profilePage: profileReducer,
    form: formReducer,
})

const rootReducer = (state, action) => {

    if (action.type === 'LOG-OUT') {
        state = undefined
      }

    return allReducers(state, action)
}

export default rootReducer