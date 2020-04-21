import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { devToolsEnhancer  } from 'redux-devtools-extension';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import peoplesReducer from './peoples-reducer';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    peoplesPage: peoplesReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



const enhancers = [
    applyMiddleware(thunkMiddleware)
]

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
: compose

const store = createStore(
    reducers,
    composeEnhancers(...enhancers)
)

export default store;