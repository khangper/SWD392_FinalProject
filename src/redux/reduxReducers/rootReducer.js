import { combineReducers } from "redux";
import streamsReducer from "./reducers/AllLiveStreamReducer";
import instructorReducer from "./reducers/instructorReducer";

const rootReducer = combineReducers({
  streams: streamsReducer,
  allinstructor: instructorReducer,
});

export default rootReducer;
