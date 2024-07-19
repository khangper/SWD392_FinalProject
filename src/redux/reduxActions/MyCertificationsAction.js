import {
    FETCH_MY_CERTIFICATIONS_REQUEST,
    FETCH_MY_CERTIFICATIONS_SUCCESS,
    FETCH_MY_CERTIFICATIONS_FAILURE,
    DELETE_MY_CERTIFICATIONS_REQUEST,
    DELETE_MY_CERTIFICATIONS_SUCCESS,
    DELETE_MY_CERTIFICATIONS_FAILURE

} from '../../constant/data';

export const fetchMyCertificationRequest = () => ({
    type: FETCH_MY_CERTIFICATIONS_REQUEST,
});

export const fetchMyCertificationSuccess = (certifications) => ({
    type: FETCH_MY_CERTIFICATIONS_SUCCESS,
    payload: certifications,
});

export const fetchMyCertificationFailure = (error) => ({
    type: FETCH_MY_CERTIFICATIONS_FAILURE,
    payload: error,
});

export const deleteMyCertificationRequest = (certificationId) => ({
    type: DELETE_MY_CERTIFICATIONS_REQUEST,
    payload: certificationId,
});
export const deleteMyCertificationSuccess = (certificationId) => ({
    type: DELETE_MY_CERTIFICATIONS_SUCCESS,
    payload: certificationId,
});
export const deleteMyCertificationFailure = (error) => ({
    type: DELETE_MY_CERTIFICATIONS_FAILURE,
    payload: error,
});