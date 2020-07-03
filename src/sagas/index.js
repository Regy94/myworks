
import { fork, all } from 'redux-saga/effects';
import { messagesSagaWatcher, deleteMessageSagaWatcher, fetchMessagesWatcher } from './dialogs';
import { peoplesWatcher } from '../modules/Peoples/sagas';

export default function* rootSaga() {
    yield all([
        fork(messagesSagaWatcher),
        fork(deleteMessageSagaWatcher),
        fork(fetchMessagesWatcher),
        fork(peoplesWatcher)
    ])
  }
