import ActionTypes from "../../constant/constant";
const initial_state = {
  // stdData: [],
  // regCityGets: [],
  // regInstGets: [],
  //   courseAnnouceGets: [],
  //   stdRegData: [],
  message: "",
  error: "",
  loading: false,
  userData: [],
  userDataByEmail: [],
};

const stdRegDataReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.USER_DATA_REQUEST:
      return { loading: true };
    case ActionTypes.USER_DATA_SUCCESS:
      return {
        loading: false,
        userData: action.payload.fetchStudent,
        message: action.payload.message,
      };
    case ActionTypes.USER_DATA_FAIL:
      return { loading: false, error: action.payload };
    case ActionTypes.CLEAR_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

// const stdRegDataByEmailReducer = (state = initial_state, action) => {
//   switch (action.type) {
//     case ActionTypes.USER_DATA_EMAIL_REQUEST:
//       return { loading: true };
//     case ActionTypes.USER_DATA_EMAIL_SUCCESS:
//       return {
//         loading: false,
//         userData: action.payload.fetchStudent,
//         message: action.payload.message,
//       };
//     case ActionTypes.USER_DATA_EMAIL_FAIL:
//       return { loading: false, error: action.payload };
//     case ActionTypes.CLEAR_MESSAGE:
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// };

export { stdRegDataReducer };
