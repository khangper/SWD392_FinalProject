import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeLiveStreamsSuccess, fetchHomeLiveStreamsFailure } from '../../../reduxActions/homeActions/HomeLivestreamAction';
import { FETCH_HOME_LIVESTREAM_REQUEST } from '../../../../constant/data';
function* fetchHomeLiveStreams() {
    try {
      const response = yield call(fetch, 'https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_livestream');
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

  