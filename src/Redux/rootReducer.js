import { combineReducers } from "redux";
import readUserAuthReducer from './reducer/stdRegDataReducer/ReadUser'
import {
  registerReducer,
  stdregistrationReducer,
} from "./reducer/stdRegistrationReducer";
import {
  userLoginReducer,
  adminLoginReducer,
  createUserReducer,
  readAdminAuthReducer,
} from "./reducer/authReducer";

import {
  stdRegDataReducer,
  stdRegDataByEmailReducer,
} from "./reducer/stdRegDataReducer/stdRegDataReducer";
import { courseReducer } from "./reducer/courseReducer/index";
import { attendancereducer } from "./reducer/attendancereducer";
import { assignmentreducer } from "./reducer/assignment";

export default combineReducers({
  registerReducer,
  stdregistrationReducer,
  userLoginReducer,
  adminLoginReducer,
  readAdminAuthReducer,
  readUserAuthReducer,
  createUserReducer,
  stdRegDataReducer,
  courseReducer,
  attendancereducer,
  assignmentreducer
  // stdRegDataByEmailReducer,
});
