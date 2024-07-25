import { call, put, takeLatest } from "redux-saga/effects";
import { API_KEY, CREATE_COURSE_REQUEST } from "../../../constant/data";
import { createCourseFailure, createCourseSuccess } from "../../reduxActions/CreateCourseAction";

function* createCourseSaga(action) {
    try {
      const response = yield call(fetch,  `${API_KEY}home_featuredcourse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      });
      const data = yield response.json();
      if (response.ok) {
        yield put(createCourseSuccess(data));
      } else {
        yield put(createCourseFailure(data.error));
      }
    } catch (error) {
      yield put(createCourseFailure(error.message));
    }
  }


export default function* handleCreateCourse() {
    yield takeLatest(CREATE_COURSE_REQUEST, createCourseSaga);
  }