import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";
import HomeLivestreamReducer from "./reducers/homeReducers/HomeLivestreamReducer";
import HomeFeaturedCourseReducer from "./reducers/homeReducers/HomeFeatureCourseReducer";
import InsDashboardCardReducer from "./reducers/insDashboardReducers/InsDashboardCardReducer";
import InsDashboardCourseReducer from "./reducers/insDashboardReducers/InsDashboardCourseReducer";
import InsDashboardNewReducer from "./reducers/insDashboardReducers/InsDashboardNewReducer";
import loadingReducer from "./reducers/LoadingReducer";
import HomeNewestCourseReducer from "./reducers/homeReducers/HomeNewestCourseReducer";
import HomePopularInstructorReducer from "./reducers/homeReducers/HomePopularInstructorReducer";
import HomeStudentThoughtReducer from "./reducers/homeReducers/HomeStudentThoughtReducer";
import liveOutputLivestreamReducers from "./reducers/liveOutputReducers/liveOutputLivestreamReducers";
import BlogReducer from "./reducers/blogReducers/BlogReducer";
import EarningTableReducer from "./reducers/earningReducers/EarningTableReducers";
import EarningTopCountryReducer from "./reducers/earningReducers/EarningTopCountryReducer";
import PayoutTableReducer from "./reducers/payoutReducers/PayoutTableReducer";
import CreditTableReducer from "./reducers/creditReducers/CreditTableReducer";
import searchresultReducer from "./reducers/searchresultReducer";
import saveCourseReducer from "./reducers/SaveCourseReducer";
import ShoppingCartReducer from "./reducers/ShoppingCartReducer";
import courseReducer from "./reducers/MyCourseReducers/CourseReducer";
import coursesdReducer from "./reducers/CoursesDReducer";
import commentsReducer from "./reducers/CommentReducer";
import chatReducer from "./reducers/MessageReducer";
import mycertificationReducer from "./reducers/MyCertificationsReducer";
import statementSTReducer from "./reducers/StatementSTReducer";
import statementISReducer from "./reducers/StatementISReducer";
import PressNewsReducer from "./reducers/pressReducers/PressNewsReducer";
import PressReleaseReducer from "./reducers/pressReducers/PressReleaseReducer";
import upcommingCourseReducer from "./reducers/MyCourseReducers/UpcommingCourseReducer";
import myPurchaseCourseReducer from "./reducers/MyCourseReducers/MyPurchaseReducer";
import discountReducer from "./reducers/MyCourseReducers/DiscountReducer";
import notificationReducer from "./reducers/NotificationReducers/NotificationInstructorReducer";
import notificationstudentReducer from "./reducers/NotificationReducers/NotificationStudentReducer";
  import searchReducer from "./reducers/searchReducers/SearchSlice"
import livestreamById from "./reducers/liveOutputReducers/liveoutputLiveByIdReducer";
import blogDetailReducer from "./reducers/blogReducers/BlogDetailReducer";
import ReviewReducer from "./reducers/reviewReducers/reviewReducer";
import instructorByIdReducer from "./reducers/instructorReducers/instructorByIdReducer";
import featureCoursesDetailReducer from "./reducers/coursesDetailReducers/featureCoursesDetailReducer";
import newestCoursesDetailReducer from "./reducers/coursesDetailReducers/newestCoursesDetailReducer";
import createCourseReducer from "./reducers/CreateCourseReducer";

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
  live_output_livestream: liveOutputLivestreamReducers,
  blogs: BlogReducer,
  earning_table: EarningTableReducer,
  earning_top_country: EarningTopCountryReducer,
  payout_table: PayoutTableReducer,
  credit_table: CreditTableReducer,
  searchresult: searchresultReducer,
  saveCourses: saveCourseReducer,
  cart: ShoppingCartReducer,
  courses: courseReducer,
  coursesd: coursesdReducer,
  comments: commentsReducer,
  message: chatReducer,
  mycertifications: mycertificationReducer,
  statementST: statementSTReducer,
  statementIS: statementISReducer,
  press_news: PressNewsReducer,
  press_release: PressReleaseReducer,
  upcommingCourses: upcommingCourseReducer,
  myPurchaseCourses: myPurchaseCourseReducer,
  discount: discountReducer,
  notification: notificationReducer,
  notificationStudent: notificationstudentReducer,
  search: searchReducer,
  livestreamById: livestreamById,
  blogDetail: blogDetailReducer,
  review: ReviewReducer,
  instructorById: instructorByIdReducer,
  featureCoursesDetail: featureCoursesDetailReducer,
  newestCoursesDetail: newestCoursesDetailReducer,
  createCourse: createCourseReducer
});

export default rootReducer;
