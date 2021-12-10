import ActionTypes from "../../constant/constant";
import axios from "axios";
const api = "http://localhost:5000/";


export const createQuizz = (allData) => async (dispatch) => {
  console.log('This is Quizz Data from action',allData)
  try {
    // dispatch({ type: ActionTypes.ADMIN_CREATE_QUIZZ_SUCCESS, payload:quizzData });

    // const headers = { "Content-Type": "application/json" };

    // const { data } = await axios.post(
    //   `${api}registration/searchStudentDataById`,
    //   { quizzData },
    //   { headers }
    // );
    // console.log(data);
    // localStorage.setItem("adminEmail", data.checkUser.email);
    // console.log(data.checkUser.email);
    // dispatch({ type: ActionTypes.ADMIN_CREATE_QUIZZ_SUCCESS, payload: quizzData });
    // console.log(data);
  } catch (error) {
    console.log(error);

    // console.log(error.response.data.message);

    dispatch({
      type: ActionTypes.ADMIN_CREATE_QUIZZ_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
