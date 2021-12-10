import axios from "axios";

const api = "https://jawan-tech-backend.herokuapp.com/";

const getadminallassignments = () => async (dispatch) => {
  dispatch({ type: "GET_ADMIN_ASSIGNMENT" });

  axios
    .get(`${api}assignment/getallassigments`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: "GET_ADMIN_ASSIGNMENT_SUCCESS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "GET_ADMIN_ASSIGNMENT_ERROR", payload: err.message });
      console.log(err);
    });
};

const getsinglestdassignment = (id) => async (dispatch) => {
  dispatch({ type: "GET_ADMIN_SINGLE_ASSIGNMENT", id });
  console.log(id);
};

const filterassignments =
  (city, institute, course, batch, time) => async (dispatch) => {
    dispatch({
      type: "FILTER_ASSIGNMENTS",
      city,
      institute,
      course,
      batch,
      time,
    });
  };

const emptyassignment = () => async (dispatch) => {
  dispatch({ type: "EMPTY_ASSIGNMENTS" });
};

const givestdmarks =
  (id, rollNo, obtainMarks, assignmentName) => async (dispatch) => {
    dispatch({ type: "GIVE_STD_MARKS" });

    const obj = {
      id,
      rollNo,
      obtainMarks,
      assignmentName,
    };

    console.log(obj)

    const options = {
      method: "PUT",
      headers: { Accept: "application/json" },
      data: obj,
      url: `${api}assignment/stdmarkass`,
    };

    axios(options).then((res) => {
        console.log(res)
        dispatch({type:'GIVE_STD_MARKS_SUCCESS'})
        alert('data has been updated')
    })
      .catch((err) => dispatch({ type: "GIVE_STD_MARKS_ERROR" }));
  };
export {
  getadminallassignments,
  getsinglestdassignment,
  filterassignments,
  emptyassignment,
  givestdmarks
};
