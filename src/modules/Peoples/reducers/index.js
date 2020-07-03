import { handleActions } from "redux-actions";
import { setUsers, toggleLoading } from "../actions";

const initialState = {
    usersTotalCount: 0,
    currentPage: 1,
    pageSize: 10,
    peoples: [],
    isLoading: true,
    disableIDs: []
};

export default handleActions({
        [setUsers]: (state, { payload }) => {
            return {
                ...state,
                peoples: payload
            }
        },

        [toggleLoading]: (state, { payload }) => {
            return {
                ...state,
                isLoading: payload.isLoading
            }
        }
    },
    initialState
)