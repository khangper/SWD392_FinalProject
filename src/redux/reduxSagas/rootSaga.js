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

export default function* rootSaga() {
  yield all([streamsSaga(), 
             instructorsSaga(),
             watchFetchHomeLiveStreams(),
              watchFetchHomeFeaturedCourses(),
              watchFetchHomeNewestCourses(),
              watchFetchHomePopularInstructors(),
              watchFetchHomeStudentThoughts(),
              watchFetchInsDashboardCards(),
              watchFetchInsDashboardCourses(),
              watchFetchInsDashboardNews(),
            ]);
}
