import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_COMMENTS_REQUEST } from "../../../constant/data";
import { fetchCommentsSuccess, fetchCommentsFailure } from "../../reduxActions/CommentAction";

const API_URL = "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/Discussion";

function* fetchCommentsSaga() {
    try {
        const response = yield call(fetch, API_URL);
        const data = yield response.json();
        yield put(fetchCommentsSuccess(data));
    } catch (error) {
        yield put(fetchCommentsFailure(error.toString()));
    }
}

export default function* commentsSaga() {
    yield takeLatest(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}
