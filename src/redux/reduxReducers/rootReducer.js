import { combineReducers } from 'redux';
import HomeLivestreamReducer from './reducers/homeReducers/HomeLivestreamReducer';
import HomeFeaturedCourseReducer from './reducers/homeReducers/HomeFeatureCourseReducer';

const rootReducer = combineReducers({
    home_livestream: HomeLivestreamReducer,
    home_featuredcourse: HomeFeaturedCourseReducer
});

export default rootReducer;