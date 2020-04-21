import { authApi } from "../api/api";

const initialState = {
    login:null,
    id:null,
    isLoading:false,
    isAuth:false,
    errorMessages: []
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET-USER-LOGIN':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case 'AUTH-USER':
            return {
                ...state,
                isAuth: true
            }

        case 'ERROR-AUTH':
            return {
                ...state,
                errorMessages: [...action.messages]
            }

        case 'LOG-OUT':
            return {
                ...state,
                login:null,
                id:null,
                isAuth: false
            }

        case 'TOGGLE-IS-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state;
    }
}

export const setUserLoginAC = ({id, login}) => ({type:'SET-USER-LOGIN', data: {id, login}})

export const authUserAC = ({email,pass,remember}) => { return{type: 'AUTH-USER', data: {email,pass,remember}}}

export const errorAuthAC = (messages) => { return{ type:'ERROR-AUTH', messages }}

export const logOutAC = () => { return{ type: 'LOG-OUT' }}

export const toggleLoadingAC = (isLoading) => {return {type: 'TOGGLE-IS-LOADING', isLoading: isLoading}}

export const getMeInformationTC = () => {

    return (dispatch) => {
        return authApi.loginUser().then(data => {
            if (data.resultCode === 0) {
                const {id,login}=data.data;
                dispatch(setUserLoginAC({id,login}))
                }
            }
        )
    }
}

export const authUserTC = ({email,pass,remember}) => {

    return (dispatch) => {
        dispatch(toggleLoadingAC(true))
        authApi.loginForm({email,pass,remember}).then(data => {
            if (data.resultCode === 0) {
                dispatch(getMeInformationTC())
                dispatch(toggleLoadingAC(false))
            }
            else {
                dispatch(errorAuthAC(data.messages))
                dispatch(toggleLoadingAC(false))
            }
        })
    }
}

export const logOutUserTC = () => {
    return (dispatch) => {
        dispatch(toggleLoadingAC(true))
        authApi.logOutUser().then(data => {
            if (data.resultCode === 0) {
                dispatch(logOutAC())
                dispatch(toggleLoadingAC(false))
            }
        })
    }
}

export default authReducer;