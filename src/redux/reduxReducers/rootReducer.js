import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";
import HomeLivestreamReducer from "./reducers/homeReducers/HomeLivestreamReducer";
import HomeFeaturedCourseReducer from "./reducers/homeReducers/HomeFeatureCourseReducer";
import liveOutputLivestreamReducers from "./reducers/liveOutputReducers/liveOutputLivestreamReducers";
import BlogReducer from "./reducers/blogReducers/BlogReducer";

const rootReducer = combineReducers({
  home_livestream: HomeLivestreamReducer,
  home_featuredcourse: HomeFeaturedCourseReducer,
  streams: streamsReducer,
  allinstructor: instructorReducer,
  live_output_livestream: liveOutputLivestreamReducers,
  blogs: BlogReducer,
});

export default rootReducer;
