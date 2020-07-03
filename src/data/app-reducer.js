import { getMeInformationTC } from "./auth-reducer"


const initialState = {
    isInitializing: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INITIALIZING':
            return {
                ...state,
                isInitializing: true
            }

        default:
            return state
    } 
}

export const initializingAC = () => { return{ type: 'INITIALIZING' } }

export const ititializeTC = () => {

    return (dispatch) => {
        dispatch(getMeInformationTC()).then( () => {
                dispatch(initializingAC())
            }
        )
    }
}

export default appReducer;