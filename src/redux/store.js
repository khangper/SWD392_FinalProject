import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reduxReducers/rootReducer';
import rootSaga from './reduxSagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk : false}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;