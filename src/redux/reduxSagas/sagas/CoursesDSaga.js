import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCoursesDRequest, fetchCoursesDFailure, fetchCoursesDSuccess } from "../../reduxActions/CoursesDAction";
import { FETCH_COURSESD_REQUEST } from "../../../constant/data";

const API_URL = "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/CoursesD";

function* fetchCoursesDSaga() {
    try {
        const response = yield call(fetch, API_URL);
        const data = yield response.json();
        yield put(fetchCoursesDSuccess(data));
    } catch (error) {
        yield put(fetchCoursesDFailure(error.toString()));
    }
}

export default function* coursesDSaga() {
    yield takeLatest(FETCH_COURSESD_REQUEST, fetchCoursesDSaga);
}
