import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchMyCertificationSuccess,
    fetchMyCertificationFailure,
    deleteMyCertificationSuccess,
    deleteMyCertificationFailure
} from "../../reduxActions/MyCertificationsAction";

import { FETCH_MY_CERTIFICATIONS_REQUEST, DELETE_MY_CERTIFICATIONS_REQUEST } from "../../../constant/data";

function* fetchMyCertifications() {
    try {
        const response = yield call(
            fetch,
            "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCertifications"
        );
        const data = yield response.json();
        yield put(fetchMyCertificationSuccess(data));
    } catch (error) {
        yield put(fetchMyCertificationFailure(error.toString()));
    }
}

function* deleteMyCertifications(action) {
    try {
        yield call(
            fetch,
            `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyCertifications/${action.payload}`,
            {
                method: "DELETE",
            }
        );
        yield put(deleteMyCertificationSuccess(action.payload));
    } catch (error) {
        yield put(deleteMyCertificationFailure(error.toString()));
    }
}


export default function* MyCertificationsSaga() {
    yield takeLatest(FETCH_MY_CERTIFICATIONS_REQUEST, fetchMyCertifications);
    yield takeLatest(DELETE_MY_CERTIFICATIONS_REQUEST, deleteMyCertifications);
}
