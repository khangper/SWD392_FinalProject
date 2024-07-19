// import { call, put, takeLatest, all } from "redux-saga/effects";
// import {
//   fetchSaveCoursesFailure,
//   fetchSaveCoursesSuccess,
//   deleteSaveCourseFailure,
//   deleteSaveCourseSuccess,
//   deleteSaveCoursesFailure,
//   deleteSaveCoursesSuccess,
// } from "../../../redux/reduxActions/SaveCourseAction";
// import {
//   FETCH_SAVECOURSES_REQUEST,
//   DELETE_SAVECOURSE_REQUEST,
//   DELETE_SAVECOURSES_REQUEST,
//   API_KEY,
// } from "../../../constant/data";
// import { startLoading, stopLoading } from "../../reduxActions/LoadingAction";

// // const API_URL =
// //   "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/SaveCourse";

// function* fetchSaveCoursesSaga() {
//   try {
//     yield put(startLoading());
//     const response = yield call(fetch, `${API_KEY}SaveCourse`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = yield response.json();
//     yield put(fetchSaveCoursesSuccess(data));
//   } catch (error) {
//     yield put(fetchSaveCoursesFailure(error.message));
//   } finally {
//     yield put(stopLoading());
//   }
// }

// function* deleteSaveCourseSaga(action) {
//   try {
//     yield put(startLoading());
//     const { payload: id } = action;
//     const response = yield call(fetch, `${API_KEY}SaveCourse/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     yield put(deleteSaveCourseSuccess(id));
//   } catch (error) {
//     yield put(deleteSaveCourseFailure(error.message));
//   } finally {
//     yield put(stopLoading());
//   }
// }

// function* deleteSaveCoursesSaga(action) {
//   try {
//     yield put(startLoading());
//     const { payload: ids } = action;
//     const deleteRequests = ids.map((id) =>
//       call(fetch, `${API_KEY}SaveCourse/${id}`, {
//         method: "DELETE",
//       })
//     );
//     const responses = yield all(deleteRequests);
//     const failedResponses = responses.filter((response) => !response.ok);

//     if (failedResponses.length) {
//       throw new Error("Some deletions failed");
//     }

//     yield put(deleteSaveCoursesSuccess(ids));
//   } catch (error) {
//     yield put(deleteSaveCoursesFailure(error.message));
//   } finally {
//     yield put(stopLoading());
//   }
// }

// export function* watchSaveCourses() {
//   yield takeLatest(FETCH_SAVECOURSES_REQUEST, fetchSaveCoursesSaga);
//   yield takeLatest(DELETE_SAVECOURSE_REQUEST, deleteSaveCourseSaga);
//   yield takeLatest(DELETE_SAVECOURSES_REQUEST, deleteSaveCoursesSaga);
// }

// import { call, put, takeLatest, all } from "redux-saga/effects";
// import {
//   fetchSaveCoursesFailure,
//   fetchSaveCoursesSuccess,
//   deleteSaveCourseFailure,
//   deleteSaveCourseSuccess,
//   deleteSaveCoursesFailure,
//   deleteSaveCoursesSuccess,
// } from "../../../redux/reduxActions/SaveCourseAction";
// import {
//   FETCH_SAVECOURSES_REQUEST,
//   DELETE_SAVECOURSE_REQUEST,
//   DELETE_SAVECOURSES_REQUEST,
//   API_KEY,
// } from "../../../constant/data";
// import { startLoading, stopLoading } from "../../reduxActions/LoadingAction";

// // const API_URL =
// //   "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/SaveCourse";

// function* fetchSaveCoursesSaga() {
//   try {
//     yield put(startLoading());
//     const response = yield call(fetch, `${API_KEY}SaveCourse`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = yield response.json();
//     yield put(fetchSaveCoursesSuccess(data));
//   } catch (error) {
//     yield put(fetchSaveCoursesFailure(error.message));
//   } finally {
//     yield put(stopLoading());
//   }
// }

// function* deleteSaveCourseSaga(action) {
//   try {
//     yield put(startLoading());
//     const { payload: id } = action;
//     const response = yield call(fetch, `${API_KEY}SaveCourse/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     yield put(deleteSaveCourseSuccess(id));
//   } catch (error) {
//     yield put(deleteSaveCourseFailure(error.message));
//   } finally {
//     yield put(stopLoading());
//   }
// }

// function* deleteSaveCoursesSaga(action) {
//   try {
//     yield put(startLoading());
//     const { payload: ids } = action;
//     const deleteRequests = ids.map((id) =>
//       call(fetch, `${API_KEY}SaveCourse/${id}`, {
//         method: "DELETE",
//       })
//     );
//     const responses = yield all(deleteRequests);
//     const failedResponses = responses.filter((response) => !response.ok);

//     if (failedResponses.length) {
//       throw new Error("Some deletions failed");
//     }

//     yield put(deleteSaveCoursesSuccess(ids));
//   } catch (error) {
//     yield put(deleteSaveCoursesFailure(error.message));
//   } finally {
//     yield put(stopLoading());
//   }
// }

// export function* watchSaveCourses() {
//   yield takeLatest(FETCH_SAVECOURSES_REQUEST, fetchSaveCoursesSaga);
//   yield takeLatest(DELETE_SAVECOURSE_REQUEST, deleteSaveCourseSaga);
//   yield takeLatest(DELETE_SAVECOURSES_REQUEST, deleteSaveCoursesSaga);
// }
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchSaveCoursesFailure,
  fetchSaveCoursesSuccess,
  deleteSaveCourseFailure,
  deleteSaveCourseSuccess,
  deleteSaveCoursesFailure,
  deleteSaveCoursesSuccess,
  deleteAllSaveCoursesFailure,
  deleteAllSaveCoursesSuccess,
} from "../../../redux/reduxActions/SaveCourseAction";
import {
  FETCH_SAVECOURSES_REQUEST,
  DELETE_SAVECOURSE_REQUEST,
  DELETE_SAVECOURSES_REQUEST,
  DELETE_ALL_SAVECOURSES_REQUEST,
  API_KEY,
} from "../../../constant/data";
import { startLoading, stopLoading } from "../../reduxActions/LoadingAction";

function* fetchSaveCoursesSaga() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}SaveCourse`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = yield response.json();
    yield put(fetchSaveCoursesSuccess(data));
  } catch (error) {
    yield put(fetchSaveCoursesFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* deleteSaveCourseSaga(action) {
  try {
    yield put(startLoading());
    const { payload: id } = action;
    const response = yield call(fetch, `${API_KEY}SaveCourse/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    yield put(deleteSaveCourseSuccess(id));
  } catch (error) {
    yield put(deleteSaveCourseFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* deleteSaveCoursesSaga(action) {
  try {
    yield put(startLoading());
    const { payload: ids } = action;
    const deleteRequests = ids.map((id) =>
      call(fetch, `${API_KEY}SaveCourse/${id}`, {
        method: "DELETE",
      })
    );
    const responses = yield all(deleteRequests);
    const failedResponses = responses.filter((response) => !response.ok);

    if (failedResponses.length) {
      throw new Error("Some deletions failed");
    }

    yield put(deleteSaveCoursesSuccess(ids));
  } catch (error) {
    yield put(deleteSaveCoursesFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* deleteAllSaveCoursesSaga() {
  try {
    yield put(startLoading());
    const response = yield call(fetch, `${API_KEY}SaveCourse`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = yield response.json();

    const deleteRequests = data.map((course) =>
      call(fetch, `${API_KEY}SaveCourse/${course.id}`, {
        method: "DELETE",
      })
    );

    const responses = yield all(deleteRequests);
    const failedResponses = responses.filter((response) => !response.ok);

    if (failedResponses.length) {
      throw new Error("Some deletions failed");
    }

    yield put(deleteAllSaveCoursesSuccess());
  } catch (error) {
    yield put(deleteAllSaveCoursesFailure(error.message));
  } finally {
    yield put(stopLoading());
  }
}

export function* watchSaveCourses() {
  yield takeLatest(FETCH_SAVECOURSES_REQUEST, fetchSaveCoursesSaga);
  yield takeLatest(DELETE_SAVECOURSE_REQUEST, deleteSaveCourseSaga);
  yield takeLatest(DELETE_SAVECOURSES_REQUEST, deleteSaveCoursesSaga);
  yield takeLatest(DELETE_ALL_SAVECOURSES_REQUEST, deleteAllSaveCoursesSaga);
}
