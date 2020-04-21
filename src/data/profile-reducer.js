import { profileApi } from "../api/api";
import { stopSubmit } from "redux-form";

const initialState={
        posts: [
            {id: 1, header: 'Header 1', text:'Any text here'},
            {id: 2, header: 'Header 2', text:'This is my first post'}
        ],
        profile: {},
        isLoading: false,
        status: '',
        isStatusLoading: false,
        isProfileUpdateLoading: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 3, header: 'Header 3', text:action.postText}],
            }


        case 'SET-PROFILE':
            return{
                ...state,
                profile: action.profile
            }

        case 'TOGGLE-IS-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }

        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }

        case 'TOGGLE-STATUS-LOADING':
            return {
                ...state,
                isStatusLoading: action.isStatusLoading
            }

        case 'TOGGLE-PROFILE-UPDATE-IS-LOADING':
            return {
                ...state,
                isProfileUpdateLoading: action.isProfileUpdateLoading
            }

        case 'UPDATE-PROFILE-PHOTO':
            return {
                ...state,
                profile: {...state.profile, photos:action.photos}
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => ({type: 'ADD-POST', postText});

export const setProfileAC = (profile) => { return {type: 'SET-PROFILE', profile:profile}};

export const toggleLoadingAC = (isLoading) => { return {type: 'TOGGLE-IS-LOADING', isLoading: isLoading} }

export const toggleProfileUpdateLoadingAC = (isProfileUpdateLoading) => ({type: 'TOGGLE-PROFILE-UPDATE-IS-LOADING', isProfileUpdateLoading})

export const setStatusAC = (status) => {return {type: 'SET-STATUS', status: status}}

export const toggleStatusLoadingAC = (isStatusLoading) => {return {type: 'TOGGLE-STATUS-LOADING', isStatusLoading: isStatusLoading}}

export const errorUpdateProfileAC = (error) => ({type: 'ERROR_UPDATE_PROFILE', error})

export const updateProfilePhotoAC = (photos) => ({type: 'UPDATE-PROFILE-PHOTO', photos})

export const getProfileTC = (userId) => {

    return(dispatch) => {
        dispatch(toggleLoadingAC(true));
        profileApi.getProfile(userId).then(response => {
            dispatch(setProfileAC(response))
            dispatch(toggleLoadingAC(false));
        })
    }
}

export const getStatusTC = (userId) => {

    return (dispatch) => {
        dispatch(toggleStatusLoadingAC(true))
        profileApi.getStatus(userId).then(response => {
            dispatch(setStatusAC(response));
            dispatch(toggleStatusLoadingAC(false))
        })
    }
}

export const updateStatusTC = (status) => {

    return (dispatch) => {
        dispatch(toggleStatusLoadingAC(true))
        profileApi.updateStatus(status).then( response => {
            if (response.resultCode === 0) {
                dispatch(setStatusAC(status))
                dispatch(toggleStatusLoadingAC(false))
            }
        })
    }
}

export const updateProfileTC = (profile, setEditMode) => {

    return (dispatch, getState) => {
        dispatch(toggleProfileUpdateLoadingAC(true))
        const userId= getState().auth.id;
        profileApi.updateProfile(profile).then(response => {

            if (response.data.resultCode === 0) {
                profileApi.getProfile(userId).then(response => {
                    dispatch(setProfileAC(response))
                })
                setEditMode(false)
                dispatch(toggleProfileUpdateLoadingAC(false))
            }
            if (response.data.resultCode === 1) {
                dispatch(stopSubmit("profileEditForm", {_error: response.data.messages}));
                dispatch(toggleProfileUpdateLoadingAC(false))
            }
        })
    }
}

export const updateProfilePhotoTC = (photo) => {

    return (dispatch) => {
        profileApi.updateUserPhoto(photo).then( response => {
            dispatch(updateProfilePhotoAC(response.data.data.photos))
        })
    }
}

export default profileReducer;