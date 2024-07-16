import { all } from "redux-saga/effects";

import streamsSaga from "./sagas/AllLiveStreamSaga";
import instructorsSaga from "./sagas/instructorsSaga";
import { watchFetchHomeLiveStreams } from "./sagas/homeSagas/HomeLivestreamSaga";
import { watchFetchHomeFeaturedCourses } from "./sagas/homeSagas/HomeFeaturedCourseSaga";
import { watchFetchHomeNewestCourses } from "./sagas/homeSagas/HomeNewestCourseSaga";
import { watchFetchHomePopularInstructors } from "./sagas/homeSagas/HomePopularInstructorSaga";
import { watchFetchHomeStudentThoughts } from "./sagas/homeSagas/HomeStudentThoughtSaga";
import { watchFetchInsDashboardCards } from "./sagas/insDashboardSagas/InsDashboardCardSaga";
import { watchFetchInsDashboardCourses } from "./sagas/insDashboardSagas/InsDashboardCourseSaga";
import { watchFetchInsDashboardNews } from "./sagas/insDashboardSagas/InsDashboardNewSaga";
import { watchFetchLiveOutputLiveStreams } from "./sagas/liveOutputSagas/liveOutputLivestreamSagas";
import { watchFetchBlogs } from "./sagas/blogSagas/BlogSagas";
import { watchFetchEarningTable } from "./sagas/earningSagas/EarningTableSaga";
import { watchFetchEarningTopCountry } from "./sagas/earningSagas/EarningTopContrySaga";
import { watchFetchPayoutTable } from "./sagas/payoutSagas/PayoutTableSaga";
import { watchFetchCreditTable } from "./sagas/creditSagas/CreditTableSaga";
import searchresultSaga from "./sagas/searchresultSaga";
import { watchSaveCourses } from "./sagas/SaveCourseSaga";
import { watchAddToCart } from "./sagas/ShoppingCartSaga";
import courseSaga from "./sagas/MyCourseSaga/CourseSaga";
import MyCertificationsSaga from "./sagas/MyCertificationsSaga";
import statementSTSaga from "./sagas/StatementSTSaga";
import statementISSaga from "./sagas/StatementISSaga";

export default function* rootSaga() {
  yield all([
    streamsSaga(),
    instructorsSaga(),
    watchFetchHomeLiveStreams(),
    watchFetchHomeFeaturedCourses(),
    watchFetchHomeNewestCourses(),
    watchFetchHomePopularInstructors(),
    watchFetchHomeStudentThoughts(),
    watchFetchInsDashboardCards(),
    watchFetchInsDashboardCourses(),
    watchFetchInsDashboardNews(),
    watchFetchLiveOutputLiveStreams(),
    watchFetchBlogs(),
    watchFetchEarningTable(),
    watchFetchEarningTopCountry(),
    watchFetchPayoutTable(),
    watchFetchCreditTable(),
    watchSaveCourses(),
    watchAddToCart(),
    courseSaga(),
    searchresultSaga(),
    MyCertificationsSaga(),
    statementSTSaga(),
    statementISSaga(),
  ]);

}
