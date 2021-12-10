import ActionTypes from "../../constant/constant";
const initial_state = {
  userInfo: {} ,
  loadings: false,
  errorss: "",
};

const readUserAuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.READ_USER_AUTH_REQUEST:
      return { loadings: true };
    case ActionTypes.READ_USER_AUTH_SUCCESS:
      return {
        ...state,
        loadings: false,
        userInfo: action.payload,

        // message: action.payload.message,
      };

    case ActionTypes.READ_USER_AUTH_FAIL:
      return { loadings: false, errorss: action.payload };
    //   case ActionTypes.CLEAR_MESSAGE:
    //   return { ...state, message: action.payload };
    // case ActionTypes.ADMIN_LOGOUT:
    //   return {};
    default:
      return state;
  }
};

export default readUserAuthReducer;
