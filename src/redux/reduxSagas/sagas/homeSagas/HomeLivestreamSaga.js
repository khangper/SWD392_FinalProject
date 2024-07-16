import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeLiveStreamsSuccess, fetchHomeLiveStreamsFailure } from '../../../reduxActions/homeActions/HomeLivestreamAction';
import { API_KEY, FETCH_HOME_LIVESTREAM_REQUEST } from '../../../../constant/data';
import { startLoading, stopLoading } from '../../../reduxActions/LoadingAction';
function* fetchHomeLiveStreams() {
    try {
      yield put(startLoading());
      const response = yield call(fetch, `${API_KEY}home_livestream`);
      const data = yield response.json();
      if (response.ok) {
        yield put(fetchHomeLiveStreamsSuccess(data));
      } else {
        yield put(fetchHomeLiveStreamsFailure(data.message || 'Failed to fetch live streams'));
      }
    } catch (error) {
      yield put(fetchHomeLiveStreamsFailure(error.message));
    } finally{
      yield put(stopLoading());
    }
  }
  
 export function* watchFetchHomeLiveStreams() {
    yield takeEvery(FETCH_HOME_LIVESTREAM_REQUEST, fetchHomeLiveStreams);
  }

  