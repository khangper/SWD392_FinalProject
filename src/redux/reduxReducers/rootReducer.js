import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";
import HomeLivestreamReducer from './reducers/homeReducers/HomeLivestreamReducer';
import HomeFeaturedCourseReducer from './reducers/homeReducers/HomeFeatureCourseReducer';
import searchresultReducer from "./reducers/searchresultReducer";

const rootReducer = combineReducers({
  home_livestream: HomeLivestreamReducer,
  home_featuredcourse: HomeFeaturedCourseReducer,
  streams: streamsReducer,
  allinstructor: instructorReducer,
  searchresult: searchresultReducer,
});

export default rootReducer;
