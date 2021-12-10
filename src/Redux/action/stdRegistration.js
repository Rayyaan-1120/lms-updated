import ActionTypes from "../constant/constant";
import axios from "axios";
// import api from '../../components/apiList/apiList'

const api = "https://jawan-tech-backend.herokuapp.com/";
// const api = "http://localhost:5000/";

// function stdRegistrationAdd(states) {
//   const {
//     city,
//     institute,
//     course,
//     courseTiming,
//     fullName,
//     fatherGurName,
//     email,
//     phNumber,
//     fatherGurPhNum,
//     cnic,
//     gender,
//     dob,
//     address,
//     qualification,
//   } = states;
//   return (dispatch) => {
//     const headers = { "Content-Type": "application/json" };
//     // fetch(`${api}smit/smitCoursesGet`, { headers })
//     axios
//       .post(
//         `http://localhost:5000/registration/registerUser`,
//         {
//           city,
//           institute,
//           course,
//           courseTiming,
//           fullName,
//           fatherGurName,
//           email,
//           phNumber,
//           fatherGurPhNum,
//           cnic,
//           gender,
//           dob,
//           address,
//           qualification,
//         },
//         { headers }
//       )
//       .then((res) =>
//         res.json().then(async (response) => {
//           dispatch({ type: ActionTypes.stdDataSet, payload: response });
//         })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }
function stdRegistrationAdd(states, datas) {
  let { cityCode, instituteCode, courseCode, batchNo } = datas[0];

  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_REGISTER_REQUEST, payload: datas });
    const headers = { "Content-Type": "application/json" };
    var formData = new FormData();
    for (const key of Object.keys(states.img)) {
      formData.append("imgCollection", states.img[key]);
    }

    formData.append("city", states.city);
    formData.append("institute", states.institute);
    formData.append("course", states.course);
    formData.append("time", states.courseTiming);
    formData.append("batch", batchNo);
    formData.append("fullName", states.fullName);
    formData.append("fatherName", states.fatherGurName);
    formData.append("email", states.email.toLowerCase());
    formData.append("date", new Date());
    formData.append("dob", states.dob);
    formData.append("cnic", states.cnic);
    formData.append("address", states.address);
    formData.append("phone", states.phNumber);
    formData.append("qualification", states.qualification);
    formData.append("guardianNumber", states.fatherGurPhNum);
    formData.append("gender", states.gender.toLowerCase());
    formData.append("generatedId", cityCode + instituteCode + courseCode);

    console.log(formData);
    axios
      .post(`${api}registration/registerUser`, formData, {
        headers,
      })
      .then((res) => {
        dispatch({
          type: ActionTypes.USER_REGISTER_SUCCESS,
          payload: res.data,
        });
        console.log(res, "data");
        const obj = {
          rollNo: res.data.data.rollno,
          generatedId:
            cityCode + instituteCode + courseCode + res.data.data.rollno,
        };

        axios
          .put(`${api}registration/registerUpdateId`, obj, {
            headers,
          })
          .then((res) => {
            console.log(res.data.generatedId, "resssssssssssssss");
          })
          .catch((error) => {
            dispatch({
              type: ActionTypes.USER_REGISTER_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            });

            console.log(error.message);
          });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.USER_REGISTER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });

        console.log(error.message);
      });
  };
}

// function regCityGet() {
//   return (dispatch) => {
//     const headers = { "Content-Type": "application/json" };
//     fetch(`${api}registration/getCity`, { headers })
//       .then((res) =>
//         res.json().then(async (response) => {
//           dispatch({ type: ActionTypes.regCityGets, payload: response });
//         })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }
// function regInstGet() {
//   return (dispatch) => {
//     const headers = { "Content-Type": "application/json" };
//     fetch(`${api}registration/getInstitute`, { headers })
//       .then((res) =>
//         res.json().then(async (response) => {
//           dispatch({ type: ActionTypes.regInstGets, payload: response });
//         })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }

function emptyMessage() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.emptyMessage,
      payload: "",
    });
  };
}

function courseAnnouceGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}registration/getCourseAnoouce`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.courseAnnouceGets,
            payload: response,
          });
        })
      )
      .catch((err) => {});
  };
}
export { stdRegistrationAdd, courseAnnouceGet, emptyMessage };
