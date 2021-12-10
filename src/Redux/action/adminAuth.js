import ActionTypes from "../constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
// const api = "http://localhost:5000/";
const api = "https://jawan-tech-backend.herokuapp.com/";
const readAdminAuth = (token) => async (dispatch) => {
  console.log("token", token);

  try {
    dispatch({ type: ActionTypes.READ_ADMIN_AUTH_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    const { data } = await axios({
      method: "GET",
      url: `${api}admin/profile`,
      headers: headers,
    });

    dispatch({ type: ActionTypes.READ_ADMIN_AUTH_SUCCESS, payload: data });
    console.log("datttttt", data);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ActionTypes.READ_ADMIN_AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// Login admin
const adminAuth = (email, password, history) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ADMIN_LOGIN_REQUEST });

    const headers = { "Content-Type": "application/json" };

    const { data } = await axios.post(
      `${api}admin/adminLogin`,
      { email, password },
      { headers }
    );
    console.log("data", data);
    // localStorage.setItem("adminEmail", data.checkUser.email);
    // localStorage.setItem("adminType", data.checkUser.type);
    // const tokens = "qwerty";
    // console.log(data.checkUser.email);
    // const decodedHeader = jwt.verify(data.token, "jawanpakistan");
    // const decode = jwt.decode(data.token);

    Cookies.set("token", data.token);
    // Cookies.set("id", data.id);
    // console.log(decodedHeader);
    // console.log(decodedHeader);
    // Cookies.set("token", data.token);
    // Cookies.set("id", data.checkUser._id);
    // console.log("json", jwt.decode(data.token));
    // Cookies.set("role", data.checkUser.role);

    // if (
    //   Cookies.get("token") !== data.token &&
    //   Cookies.get("id") !== data.checkUser._id
    // ) {
    //   history.replace("/adminlogin");
    // }
    // else if (
    //   Cookies.get("token") === data.token &&
    //   Cookies.get("id") === data.checkUser._id &&
    //   data.checkUser.role === "instituteAdmin"
    // ) {
    //   history.replace("/instituteadmindashboard");
    // }
    //  else if (
    //   Cookies.get("token") === data.token &&
    //   Cookies.get("id") === data.checkUser._id &&
    //   data.checkUser.role === "teacherAdmin"
    // ) {
    //   history.replace("/teacheradmindashboard");
    // }
    // if (Cookies.get("token") === data.token) {
    //   history.push("/mainadmindashboard");
    // }
    dispatch({ type: ActionTypes.ADMIN_LOGIN_SUCCESS, payload: data });

    // localStorage.setItem("adminInfo", JSON.stringify(data));

    console.log(data.checkUser);
  } catch (error) {
    // console.log(error.response.data.message);

    dispatch({
      type: ActionTypes.ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//create new user by admin

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
  dispatch({ type: ActionTypes.ADMIN_LOGOUT });
};

export { adminAuth, logout, emptyMessage, readAdminAuth};
