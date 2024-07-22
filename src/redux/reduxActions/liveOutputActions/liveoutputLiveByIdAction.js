import {
  FETCH_LIVESTREAM_BY_ID_REQUEST,
  FETCH_LIVESTREAM_BY_ID_SUCCESS,
  FETCH_LIVESTREAM_BY_ID_FAILURE,
} from "../../../constant/data";

export const fetchLivestreamByIdRequest = (id) => ({
  type: FETCH_LIVESTREAM_BY_ID_REQUEST,
  payload: { id },
});

export const fetchLivestreamByIdSuccess = (live) => ({
  type: FETCH_LIVESTREAM_BY_ID_SUCCESS,
  payload: { live },
});

export const fetchLivestreamByIdFailure = (error) => ({
  type: FETCH_LIVESTREAM_BY_ID_FAILURE,
  payload: { error },
});
