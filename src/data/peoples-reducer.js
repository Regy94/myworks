import { peopleApi, peoplesApi } from "../api/api";

const initialState = {
    usersTotalCount: 0,
    currentPage: 1,
    pageSize: 10,
    peoples: [],
    isLoading: true,
    disableIDs: []
};

const peoplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                peoples: state.peoples.map( newPeoples => {
                    if (action.uid === newPeoples.id) {
                        return {...newPeoples, followed: true}
                    }
                    return newPeoples;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                peoples: state.peoples.map(newPeoples => {
                    if (action.uid === newPeoples.id) {
                        return {...newPeoples, followed: false}
                    }
                    return newPeoples;
                })
            }

        case 'SET-USERS':
            return {
                ...state,
                peoples: action.users
            }

        case 'CHANGE-PAGE':
            return {
                ...state,
                currentPage: action.page
            }

        case 'SET-USERS-COUNT':
            return {
                ...state,
                usersTotalCount: action.usersCount
            }

        case 'TOGGLE-IS-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }

        case 'DISABLE-BTN':
            return {
                ...state,
                disableIDs: action.isLoading
                    ?[...state.disableIDs, action.id]
                    :state.disableIDs.filter(id => id !== action.id)
            }

        case 'UNMOUNT-PAGE':
            return {
                ...state,
                currentPage: 1
            }

        default: return state;
    };
};

export const followActionCreator =  (id) => { return { type: 'FOLLOW', uid: id }}

export const unfollowActionCreator = (id) => { return { type: 'UNFOLLOW', uid: id }}

export const setUsersActionCreator = (users) => {return {type: 'SET-USERS', users: users}}

export const changePageActionCreator = (page) => { return {type: 'CHANGE-PAGE', page: page}}

export const setTotalUsersCountAC = (usersCount) => {return {type: 'SET-USERS-COUNT', usersCount: usersCount }}

export const unmountPageAC = () => ({type: 'UNMOUNT-PAGE'})

export const toggleLoadingAC = (isLoading) => {
    return {type: 'TOGGLE-IS-LOADING', isLoading: isLoading}
 }

export const disableBtnAC = (isLoading, id) => {return{type: 'DISABLE-BTN', isLoading: isLoading, id:id}}

export const followTC = (id) => {

    return (dispatch ) => {
        dispatch(disableBtnAC(true, id))
        peopleApi.followUser(id)
            .then(
                data => {
                    if (data.resultCode === 0) {
                        dispatch (followActionCreator(id))
                    }
                    dispatch (disableBtnAC(false,id))
                }
            )
    }
}

export const unfollowTC = (id) => {

    return (dispatch) => {

        dispatch(disableBtnAC(true,id))
        peopleApi.unfollowUser(id)
            .then(
                data => {
                    if (data.resultCode === 0) {
                       dispatch (unfollowActionCreator(id))
                    }
                    dispatch (disableBtnAC(false,id))
                }
            )
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleLoadingAC(true));

        peoplesApi.getUsers(currentPage, pageSize).then(data =>{
            dispatch(toggleLoadingAC(false));
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        })
    }
}


export default peoplesReducer;