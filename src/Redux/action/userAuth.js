import ActionTypes from "../constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
// const api = "http://localhost:5000/";
const api = "https://jawan-tech-backend.herokuapp.com/";

const readUserAuth = (token) => async (dispatch) => {
  console.log("token", token);

  try {
    dispatch({ type: ActionTypes.READ_USER_AUTH_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    const { data } = await axios({
      method: "GET",
      url: `${api}user/userprofile`,
      headers: headers,
    });

    dispatch({ type: ActionTypes.READ_USER_AUTH_SUCCESS, payload: data });
    console.log("datttttt", data);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ActionTypes.READ_USER_AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const createUserAuth = (email, password, rollNo) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.USER_CREATE_REQUEST });

    const headers = { "Content-Type": "application/json" };

    const { data } = await axios.post(
      `${api}admin/userSignup`,
      { email, password, rollNo },
      { headers }
    );

    dispatch({ type: ActionTypes.USER_CREATE_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    // console.log(error.response.data.message);

    dispatch({
      type: ActionTypes.USER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { readUserAuth, createUserAuth };
