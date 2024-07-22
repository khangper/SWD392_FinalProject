// // src/redux/selectors.js
// import { createSelector } from "@reduxjs/toolkit"; 

// const selectSearchQuery = state => state.search.query;

// const { selectLiveStreams } = (state) => state.home_livestream;
// const selectFeaturedCourses = state => {
//   console.log('selectFeaturedCourses:', state.home_featuredcourse.data);
//   return state.home_featuredcourse.data;
// };

// const selectNewestCourses = state => {
//   console.log('selectNewestCourses:', state.home_newestcourse.data);
//   return state.home_newestcourse.data;
// };

// const selectPopularInstructors = state => {
//   console.log('selectPopularInstructors:', state.home_popularinstructor.data);
//   return state.home_popularinstructor.data;
// };

// const selectStudentThoughts = state => {
//   console.log('selectStudentThoughts:', state.home_studentthought.data);
//   return state.home_studentthought.data;
// };

// const filterData = (data, query) => {
//   if (!Array.isArray(data)) return [];
//   if (!query) return data;
//   return data.filter(item => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()));
// };

// export const selectFilteredLiveStreams = createSelector(
//     [selectLiveStreams, selectSearchQuery],
//     (liveStreams, query) => filterData(liveStreams, query),
  
//   );

// export const selectFilteredFeaturedCourses = createSelector(
//   [selectFeaturedCourses, selectSearchQuery],
//   (featuredCourses, query) => filterData(featuredCourses, query)
// );

// export const selectFilteredNewestCourses = createSelector(
//   [selectNewestCourses, selectSearchQuery],
//   (newestCourses, query) => filterData(newestCourses, query)
// );

// export const selectFilteredPopularInstructors = createSelector(
//   [selectPopularInstructors, selectSearchQuery],
//   (popularInstructors, query) => filterData(popularInstructors, query)
// );

// export const selectFilteredStudentThoughts = createSelector(
//   [selectStudentThoughts, selectSearchQuery],
//   (studentThoughts, query) => filterData(studentThoughts, query)
// );
