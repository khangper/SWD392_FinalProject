import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeLiveStreamsSuccess, fetchHomeLiveStreamsFailure } from '../../../reduxActions/homeActions/HomeLivestreamAction';
import { FETCH_HOME_LIVESTREAM_REQUEST } from '../../../../constant/data';
function* fetchHomeLiveStreams() {
    try {
      const response = yield call(fetch, 'https://667a74cabd627f0dcc8f08d0.mockapi.io/ojt-repo/home_livestream');
      const data = yield response.json();
      if (response.ok) {
        yield put(fetchHomeLiveStreamsSuccess(data));
      } else {
        yield put(fetchHomeLiveStreamsFailure(data.message || 'Failed to fetch live streams'));
      }
    } catch (error) {
      yield put(fetchHomeLiveStreamsFailure(error.message));
    }
  }
  
 export function* watchFetchHomeLiveStreams() {
    yield takeEvery(FETCH_HOME_LIVESTREAM_REQUEST, fetchHomeLiveStreams);
  }

  