import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";
import HomeLivestreamReducer from "./reducers/homeReducers/HomeLivestreamReducer";
import HomeFeaturedCourseReducer from "./reducers/homeReducers/HomeFeatureCourseReducer";
import liveOutputLivestreamReducers from "./reducers/liveOutputReducers/liveOutputLivestreamReducers";
import BlogReducer from "./reducers/blogReducers/BlogReducer";
import EarningTableReducer from "./reducers/earningReducers/EarningTableReducers";
import EarningTopCountryReducer from "./reducers/earningReducers/EarningTopCountryReducer";
import PayoutTableReducer from "./reducers/payoutReducers/PayoutTableReducer";
import CreditTableReducer from "./reducers/creditReducers/CreditTableReducer";

const rootReducer = combineReducers({
  home_livestream: HomeLivestreamReducer,
  home_featuredcourse: HomeFeaturedCourseReducer,
  streams: streamsReducer,
  allinstructor: instructorReducer,
  live_output_livestream: liveOutputLivestreamReducers,
  blogs: BlogReducer,
  earning_table: EarningTableReducer,
  earning_top_country: EarningTopCountryReducer,
  payout_table: PayoutTableReducer,
  credit_table: CreditTableReducer,
});

export default rootReducer;
