import { call, put, takeEvery} from 'redux-saga/effects';

import { peoplesApi } from "../../../api/api";
import { fetchUsersRequest, setUsers, toggleLoading } from '../actions';


export function* peoplesWorker () {
    try {
        yield put(toggleLoading(true))
        const { data } = yield call(peoplesApi.getUsers)
        yield put(setUsers(data))
        yield put(toggleLoading(false))

    } catch (error) {
        console.error(error)
    }
}

export function* peoplesWatcher () {
    yield takeEvery( fetchUsersRequest, peoplesWorker)
}