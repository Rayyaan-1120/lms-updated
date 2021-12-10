import ActionTypes from "../../constant/constant";
import axios from "axios";
// const api = "http://localhost:5000/";
const api = "https://jawan-tech-backend.herokuapp.com/";

// Search user Data
const stdRegData = (city, institute, course, batch) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.USER_DATA_REQUEST });

    const headers = { "Content-Type": "application/json" };

    const { data } = await axios.post(
      `${api}registration/searchStudentData`,
      { city, institute, course, batch },
      { headers }
    );
    console.log(data);
    // localStorage.setItem("adminEmail", data.checkUser.email);
    // console.log(data.checkUser.email);
    dispatch({ type: ActionTypes.USER_DATA_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    console.log(error);

    // console.log(error.response.data.message);

    dispatch({
      type: ActionTypes.USER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Search user Data By Email
const stdRegDataByEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.USER_DATA_REQUEST });

    const headers = { "Content-Type": "application/json" };

    const { data } = await axios.post(
      `${api}registration/searchStudentDataById`,
      { email },
      { headers }
    );
    console.log(data);
    // localStorage.setItem("adminEmail", data.checkUser.email);
    // console.log(data.checkUser.email);
    dispatch({ type: ActionTypes.USER_DATA_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    console.log(error);

    // console.log(error.response.data.message);

    dispatch({
      type: ActionTypes.USER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { stdRegData, stdRegDataByEmail };
