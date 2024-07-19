import {
  FETCH_INSTRUCTOR_BY_ID_REQUEST,
  FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  FETCH_INSTRUCTOR_BY_ID_FAILURE,
  FETCH_INSTRUCTORS_FAILURE,
  FETCH_INSTRUCTORS_REQUEST,
  FETCH_INSTRUCTORS_SUCCESS,
  FETCH_INSTRUCTORS_MORE_FAILURE,
  FETCH_INSTRUCTORS_MORE_REQUEST,
  FETCH_INSTRUCTORS_MORE_SUCCESS,
  SEARCH_INSTRUCTORS_REQUEST,
} from "../../constant/data";

export const fetchInstructorsRequest = () => ({
  type: FETCH_INSTRUCTORS_REQUEST,
});

export const fetchInstructorsSuccess = (instructors) => ({
  type: FETCH_INSTRUCTORS_SUCCESS,
  payload: instructors,
});

export const fetchInstructorsFailure = (error) => ({
  type: FETCH_INSTRUCTORS_FAILURE,
  payload: error,
});
export const fetchInstructorsmoreRequest = () => ({
  type: FETCH_INSTRUCTORS_MORE_REQUEST,
});

export const fetchInstructorsmoreSuccess = (instructorsmore) => ({
  type: FETCH_INSTRUCTORS_MORE_SUCCESS,
  payload: instructorsmore,
});

export const fetchInstructorsmoreFailure = (error) => ({
  type: FETCH_INSTRUCTORS_MORE_FAILURE,
  payload: error,
});
export const searchInstructorsRequest = (query) => ({
  type: SEARCH_INSTRUCTORS_REQUEST,
  payload: query,
});

export const fetchInstructorByIdRequest = (id) => ({
  type: FETCH_INSTRUCTOR_BY_ID_REQUEST,
  payload: id,
});

// export const fetchInstructorByIdRequest = (id) => async (dispatch) => {
//   dispatch({ type: FETCH_INSTRUCTOR_BY_ID_REQUEST });

//   try {
//     // Thay thế URL dưới đây bằng URL API thực tế của bạn
//     const response = await fetch(`https://668dde68bf9912d4c92c0fc3.mockapi.io/Allinstructor/${id}`);
//     const data = await response.json();

//     if (response.ok) {
//       dispatch(fetchInstructorByIdSuccess(data));
//     } else {
//       dispatch(fetchInstructorByIdFailure('Failed to fetch instructor details'));
//     }
//   } catch (error) {
//     dispatch(fetchInstructorByIdFailure(error.message));
//   }
// };

export const fetchInstructorByIdSuccess = (instructor) => ({
  type: FETCH_INSTRUCTOR_BY_ID_SUCCESS,
  payload: instructor,
});

export const fetchInstructorByIdFailure = (error) => ({
  type: FETCH_INSTRUCTOR_BY_ID_FAILURE,
  payload: error,
});