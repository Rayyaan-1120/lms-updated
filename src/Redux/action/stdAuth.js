import ActionTypes from "../constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
// const api = "http://localhost:5000/";
const api = "https://jawan-tech-backend.herokuapp.com/";
// Login Auth
const loginAuth = (email, password) => async (dispatch) => {
  console.log(email, password, "sadsad");
  try {
    dispatch({ type: ActionTypes.USER_LOGIN_REQUEST });

    const headers = { "Content-Type": "application/json" };

    const { data } = await axios.post(
      `${api}user/login`,
      { email, password },
      { headers }
    );

    // localStorage.setItem("stdDataToken", data.data.token);
    // localStorage.setItem("stdGeneratedId", data.data.generatedId);
    // localStorage.setItem("fullName", data.data.fullName);
    // localStorage.setItem("email", data.data.email);
    // localStorage.setItem("image", data.data.multiple_image[0]);
    // localStorage.setItem("institute", data.data.institute);
    // localStorage.setItem("course", data.data.course);
    // localStorage.setItem("time", data.data.time);
    // localStorage.setItem("city", data.data.city);
    // localStorage.setItem("batch", data.data.batch);
    console.log(data);
    Cookies.set('Stdtoken',data.token)
    dispatch({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    // console.log(error.response.data.message);

    dispatch({
      type: ActionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

function emptyMessage() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CLEAR_MESSAGE,
      payload: "",
    });
  };
}
//Logout
const logout = () => (dispatch) => {
  dispatch({ type: ActionTypes.USER_LOGOUT });
};

export { loginAuth, logout, emptyMessage };
