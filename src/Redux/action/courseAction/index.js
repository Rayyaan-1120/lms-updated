import axios from "axios";
// const api = "http://localhost:5000/";
const api = "https://jawan-tech-backend.herokuapp.com/";

const addNewCourseData =
  (
    city,
    cityCode,
    course,
    courseId,
    batch,
    institute,
    instituteCode,
    lastDate,
    courseDura,
    courseStatus,
    courseSlots
  ) =>
  async (dispatch) => {
    dispatch({ type: "COURSE_DATA_REQUEST" });
    const obj = {
      cityName: city,
      cityCode: cityCode,
      instituteName: institute,
      instituteCode: instituteCode,
      courseName: course,
      courseCode: courseId,
      batchNo: batch,
      viewForm: courseStatus,
      year: "21",
      duration: courseDura + " " + "Months",
      admissionLastDate: lastDate,
      timings: courseSlots,
    };
    const options = {
      method: "POST",
      headers: { Accept: "application/json" },
      data: obj,
      url: `${api}registration/addCourseAnoouce`,
    };
    axios(options)
      .then((res) => {
        console.log(res);
        dispatch({ type: "COURSE_DATA_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "COURSE_DATA_FAIL",
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      });
  };

const emptyMessage = () => {
  return (dispatch) => {
    dispatch({ type: "EMPTY_MESSAGE" });
  };
};
const getAllCourse = () => async (dispatch) => {
  dispatch({ type: "GETTING_COURSES" });
  axios
    .get(`${api}registration/getCourseAnoouce`)
    .then((res) => {
      console.log(res);
      dispatch({ type: "ALL_COURSES_REQUEST", payload: res.data.data });
      // setCourseList(res.data.data);
    })
    .catch((err) => {
      console.log(err, "err");
      dispatch({ type: "COURSES_NOT FOUND", payload: "No Data Found" });
    });
};

export { addNewCourseData, emptyMessage, getAllCourse };
