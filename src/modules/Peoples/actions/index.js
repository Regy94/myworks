import { createActions } from "redux-actions";


export const {
    fetchUsersRequest,
    setUsers,
    toggleLoading
} = createActions({
    'FETCH_USERS_REQUEST': undefined,
    'SET_USERS': undefined,
    'TOGGLE_LOADING': undefined
})