import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import ActionTypes from "../constant/constant";
const initial_state = {
  // stdData: [],
  // regCityGets: [],
  // regInstGets: [],
  courseAnnouceGets: [],
  stdRegData: [],
  message: "",
  error: "",
  stdRegCourseData:[],
}
;
const stdregistrationReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.USER_REGISTER_REQUEST:
      return { ...state,loading: true,stdRegCourseData:action.payload };
    case ActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        stdRegData: action.payload.data,
        
      };

     
    case ActionTypes.USER_REGISTER_FAIL:
      return { ...state,loading: false, error: action.payload };
    case ActionTypes.emptyMessage:
      return { ...state,message: "", stdRegData: [] };
    default:
      return state;
  }
};

const registerReducer = (state = initial_state, action) => {
  switch (action.type) {
    // case ActionTypes.regInstGets:
    //   return { ...state, regInstGets: action.payload.data };
    // case ActionTypes.regCityGets:
    //   return { ...state, regCityGets: action.payload.data };
    case ActionTypes.courseAnnouceGets:
      return { ...state, courseAnnouceGets: action.payload.data };
    default: {
      return state;
    }
  }
};

export { stdregistrationReducer, registerReducer };
