import ActionTypes from "../constant/constant";
const initial_state = {
  // stdData: [],
  // regCityGets: [],
  // regInstGets: [],
  courseAnnouceGets: [],
  stdRegData: [],
  message: "",
  error: "",
  loading: false,
  adminInfo: {},
  loadings: false,
  errorss: "",
};

const userLoginReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case ActionTypes.USER_LOGIN_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data,
        // message: action.payload.message,
      };
    case ActionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ActionTypes.CLEAR_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ActionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        message: action.payload.message,
      };
    case ActionTypes.ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ActionTypes.CLEAR_MESSAGE:
      return { ...state, message: action.payload };
    case ActionTypes.ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

const readAdminAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.READ_ADMIN_AUTH_REQUEST:
      return { loadings: true };
    case ActionTypes.READ_ADMIN_AUTH_SUCCESS:
      return {
        ...state,
        loadings: false,
        adminInfo: action.payload,

        // message: action.payload.message,
      };

    case ActionTypes.READ_ADMIN_AUTH_FAIL:
      return { loadings: false, errorss: action.payload };
    //   case ActionTypes.CLEAR_MESSAGE:
    //   return { ...state, message: action.payload };
    // case ActionTypes.ADMIN_LOGOUT:
    //   return {};
    default:
      return state;
  }
};

const createUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_CREATE_REQUEST:
      return { loading: true };
    case ActionTypes.USER_CREATE_SUCCESS:
      return {
        loading: false,
        userInfo: action.paylaod,
        message: action.payload.message,
      };
    case ActionTypes.USER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    // case ActionTypes.USER_LOGOUT:
    //   return {};
    default:
      return state;
  }
};
export {
  userLoginReducer,
  adminLoginReducer,
  createUserReducer,
  readAdminAuthReducer,
};
