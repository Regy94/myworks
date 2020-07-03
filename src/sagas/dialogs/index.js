
import { call, put, takeEvery} from 'redux-saga/effects';
import { dialogsApi } from '../../api/api';
import { sentMessageRequest, deleteMessageRequest, addMessage, deleteMessage, setMessages, fetchMessagesRequest } from '../../data/dialogsReducer';

export function* messagesSagaWorker({payload}) {
    try {
        const { data } = yield call(dialogsApi.newMessage, payload)
        yield put(addMessage(data) )
    } catch (error) {
        console.log(error)
    }
}

export function* deleteMessageWorker({payload}) {
    try {
        const { data } = yield call(dialogsApi.deleteMessage, payload)
        if (data) {
            yield put (deleteMessage(payload))
        }
    } catch (error) {
        console.error(error)
    }
}

export function* fetchMessagesWorker() {
    try {
        const { data } = yield call(dialogsApi.getMessages)
        yield put (setMessages(data))
    } catch (error) {
        console.error(error)
    }
}

export function* messagesSagaWatcher() {
    yield takeEvery(sentMessageRequest, messagesSagaWorker)
}

export function* deleteMessageSagaWatcher() {
    yield takeEvery(deleteMessageRequest, deleteMessageWorker)
}

export function* fetchMessagesWatcher() {
    yield takeEvery(fetchMessagesRequest, fetchMessagesWorker)
}