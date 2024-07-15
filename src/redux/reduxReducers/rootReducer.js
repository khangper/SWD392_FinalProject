import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";
  import HomeLivestreamReducer from './reducers/homeReducers/HomeLivestreamReducer';
import HomeFeaturedCourseReducer from './reducers/homeReducers/HomeFeatureCourseReducer';
import loadingReducer from "./reducers/LoadingReducer";
import HomeNewestCourseReducer from "./reducers/homeReducers/HomeNewestCourseReducer";
import HomePopularInstructorReducer from "./reducers/homeReducers/HomePopularInstructorReducer";
import HomeStudentThoughtReducer from "./reducers/homeReducers/HomeStudentThoughtReducer";
import InsDashboardCardReducer from "./reducers/insDashboardReducers/InsDashboardCardReducer";
import InsDashboardCourseReducer from "./reducers/insDashboardReducers/InsDashboardCourseReducer";
import InsDashboardNewReducer from "./reducers/insDashboardReducers/InsDashboardNewReducer";

const rootReducer = combineReducers({
    home_livestream: HomeLivestreamReducer,
    home_featuredcourse: HomeFeaturedCourseReducer,
    home_newestcourse: HomeNewestCourseReducer,
    home_popularinstructor: HomePopularInstructorReducer,
    home_studentthought: HomeStudentThoughtReducer,
  streams: streamsReducer,
  allinstructor: instructorReducer,
  loading: loadingReducer,
  ins_dashboard_card: InsDashboardCardReducer,
  ins_dashboard_course: InsDashboardCourseReducer,
  ins_dashboard_new: InsDashboardNewReducer,
});

export default rootReducer;
