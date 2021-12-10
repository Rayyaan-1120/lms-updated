import ActionTypes from "../../constant/constant";
const initial_state = {
  quizzData: [],
  loading: false,
};

const createQuizzReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_CREATE_QUIZZ_REQUEST:
      return { loading: true };
    case ActionTypes.ADMIN_CREATE_QUIZZ_SUCCESS:
      return {
        loading: false,
        quizzData: action.payload,
      };
    case ActionTypes.ADMIN_CREATE_QUIZZ_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export{createQuizzReducer}