import {
  FETCH_FEATURED_COURSES_DETAIL_FAILURE,
  FETCH_FEATURED_COURSES_DETAIL_REQUEST,
  FETCH_FEATURED_COURSES_DETAIL_SUCCESS,
} from "../../../constant/data";

export const fetchFeaturedCoursesDetailRequest = (id) => ({
  type: FETCH_FEATURED_COURSES_DETAIL_REQUEST,
  payload: { id },
});

export const fetchFeaturedCoursesDetailSuccess = (featureCourses) => ({
  type: FETCH_FEATURED_COURSES_DETAIL_SUCCESS,
  payload: { featureCourses },
});

export const fetchFeaturedCoursesDetailFailure = (error) => ({
  type: FETCH_FEATURED_COURSES_DETAIL_FAILURE,
  payload: { error },
});
