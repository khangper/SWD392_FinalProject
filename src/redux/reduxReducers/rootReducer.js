import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";
import HomeLivestreamReducer from "./reducers/homeReducers/HomeLivestreamReducer";
import HomeFeaturedCourseReducer from "./reducers/homeReducers/HomeFeatureCourseReducer";
import saveCourseReducer from "./reducers/SaveCourseReducer";
import ShoppingCartReducer from "./reducers/ShoppingCartReducer";
import courseReducer from "./reducers/MyCourseReducers/CourseReducer";

const rootReducer = combineReducers({
  home_livestream: HomeLivestreamReducer,
  home_featuredcourse: HomeFeaturedCourseReducer,
  streams: streamsReducer,
  allinstructor: instructorReducer,
  saveCourses: saveCourseReducer,
  cart: ShoppingCartReducer,
  courses: courseReducer,
});

export default rootReducer;
