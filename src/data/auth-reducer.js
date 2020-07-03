import { authApi } from "../api/api";
import { initializingAC } from "./app-reducer";

const initialState = {
    login:'',
    id:null,
    isLoading:false,
    isAuth:false,
    errorMessages: [],
    accessToken: ''
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
                isAuth: false,
            }

        case 'TOGGLE-IS-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }

        case 'SET-LOGIN-INFO':
            return {
                ...state,
                accessToken: action.loginInfo.access_token,
                id: action.loginInfo.userId,
                login: action.loginInfo.userName,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setUserLoginAC = ({userId, userName}) => ({type:'SET-USER-LOGIN', data: {id: userId, login: userName}})

export const authUserAC = ({email,pass,remember}) => { return{type: 'AUTH-USER', data: {email,pass,remember}}}

export const errorAuthAC = (messages) => { return{ type:'ERROR-AUTH', messages }}

export const logOutAC = () => { return{ type: 'LOG-OUT' }}

export const toggleLoadingAC = (isLoading) => {return {type: 'TOGGLE-IS-LOADING', isLoading: isLoading}}

export const setLogininfoAC = (loginInfo) => ({type: 'SET-LOGIN-INFO', loginInfo})

export const getMeInformationTC = () => {

    return async (dispatch) => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user && user.access_token) {
            try {
                return await authApi.loginUser().then( response => {
                        const {userId, userName}=response;
                        dispatch(setUserLoginAC({userId, userName}))
                    }
                )
            } catch(err) {
                return Promise.resolve()
            }
        }
        return Promise.resolve()
    }
}

export const authUserTC = ({email,pass}) => {

    return async (dispatch) => {
        try {
            const { data } = await authApi.loginForm({email,pass});
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(setLogininfoAC(data))
        } catch (err) {
            dispatch(errorAuthAC(err.response.data.message))
        }
    }
}

export const logOutUserTC = () => {
    return async (dispatch) => {      
        try {
            dispatch(toggleLoadingAC(true))
            const {data} = await authApi.logOutUser()
            if (data) {
                await dispatch(logOutAC())
                localStorage.removeItem("user");
                await dispatch(initializingAC())
            }
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(toggleLoadingAC(false))
        }
    }
}

export default authReducer;