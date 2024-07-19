import { call, put, takeEvery } from 'redux-saga/effects';
import {
    fetchChatMessagesSuccess,
    fetchChatMessagesFailure
} from '../../../redux/reduxActions/MessageAction';

import { FETCH_CHAT_MESSAGES_REQUEST } from '../../../constant/data';
function* fetchChatMessages() {
    try {
        const response = yield call(fetch, 'https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/Message');
        const data = yield response.json();
        yield put(fetchChatMessagesSuccess(data));
    } catch (error) {
        yield put(fetchChatMessagesFailure(error.message));
    }
}

function* watchFetchChatMessages() {
    yield takeEvery(FETCH_CHAT_MESSAGES_REQUEST, fetchChatMessages);
}

export default watchFetchChatMessages;
