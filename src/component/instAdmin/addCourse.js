import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/bannerf.jpeg";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdmin/SideBar";
import Banner from "../../component/mainAdmin/Banner";
import Banner1 from "../../component/mainAdmin/Banner1";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCourseData,
  emptyMessage,
} from "../../Redux/action/courseAction/index";
import Modal from "react-awesome-modal";
import Logos from "../../images/landscape_logo.png";
const AddCourse = () => {
  const dispatch = useDispatch();
  const { message, loading } = useSelector((state) => state.courseReducer);

  const [cityList, setCityList] = useState([
    {
      label: "Select City",
      code: "",
    },
    {
      label: "Karachi",
      code: "K",
    },
    {
      label: "Faisalabad",
      code: "F",
    },
    {
      label: "Islamabad",
      code: "I",
    },
    {
      label: "Hyderabad",
      code: "H",
    },
    {
      label: "Lahore",
      code: "L",
    },
    {
      label: "Quetta",
      code: "Q",
    },
  ]);
  const [instituteList, setInstituteList] = useState([
    {
      label: "Select Institute",
      code: "",
    },
    {
      label: "BMJ Institute",
      code: "BJ",
    },
    {
      label: "SAIMS ( WOW )",
      code: "WOW",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [courseList, setCourseList] = useState([
    {
      label: "Select Course",
      code: "",
    },
    {
      label: "Web and Mobile App Dev",
      code: "WM",
    },
    {
      label: "Mobile App Dev Using Flutter",
      code: "FL",
    },
    {
      label: "Graphic Designing",
      code: "GD",
    },
    {
      label: "IT Essential",
      code: "IE",
    },
    {
      label: "Textile Training",
      code: "TT",
    },
    {
      label: "Certified Computerized Accountancy",
      code: "CA",
    },
    {
      label: "Cyber Security",
      code: "CS",
    },
    {
      label: "Mobile Repairing",
      code: "MR",
    },
    {
      label: "CCNA",
      code: "CNA",
    },
    {
      label: "Video Editing",
      code: "VE",
    },

    {
      label: "Network Essential",
      code: "NE",
    },
    {
      label: "Microsoft Office Specialist",
      code: "MS",
    },
    {
      label: "CCO",
      code: "CO",
    },
    {
      label: "Artificial Intellegence",
      code: "AI",
    },
    {
      label: "Cloud Native",
      code: "CN",
    },
    {
      label: "Internet of things",
      code: "IT",
    },
    {
      label: "Blockchain technology",
      code: "BT",
    },
    {
      label: "Digital Marketing",
      code: "DM",
    },
    {
      label: "Robotics",
      code: "RS",
    },
    {
      label: "Database Administration",
      code: "DA",
    },
  ]);
  const [state, setState] = useState({
    city: "",
    course: "",
    institute: "",

    batch: "",
    lastDate: "",
    courseDura: "",
    courseStatus: "",
    courseId: "",
    instituteCode: "",
    courseSlot: "",
    courseSlots: [],
    year: "",
    cityCode: "",
    chkCity: false,
    chkInstitute: false,
    chkCourse: false,
    chkBatch: false,
    chkLastDate: false,
    chkCourseStatus: false,
    chkCourseDura: false,
    chkCourseSlot: false,
  });
  console.log(state);

  const setData = (e, a, b, c, d) => {
    setState({ ...state, [a]: d[e]["label"], [b]: d[e]["code"], [c]: false });
  };
  const addCourseSlots = () => {
    setState({
      ...state,
      courseSlots: [...state.courseSlots, state.courseSlot],
      courseSlot: "",
    });
  };

  const addNewCourse = () => {
    const {
      city,
      cityCode,
      course,
      courseId,
      batch,
      lastDate,
      courseDura,
      courseStatus,
      institute,
      instituteCode,
      courseSlots,
    } = state;
    if (!city || city == "Select City") {
      setState({ ...state, chkCity: true });
    } else if (!institute || institute == "Select Institute") {
      setState({ ...state, chkInstitute: true });
    } else if (!course || course == "Select Course") {
      setState({ ...state, chkCourse: true });
    } else if (!batch) {
      setState({ ...state, chkBatch: true });
    } else if (!lastDate) {
      setState({ ...state, chkLastDate: true });
    } else if (!courseSlots || courseSlots.length == 0) {
      setState({ ...state, chkCourseSlot: true });
    } else if (!courseDura) {
      setState({ ...state, chkCourseDura: true });
    } else if (!courseStatus) {
      setState({ ...state, chkCourseStatus: true });
    } else {
      console.log("all set");
      dispatch(
        addNewCourseData(
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
        )
      );
    }
  };

  useEffect(() => {
    console.log(loading, message);
    if (message == "Course Annoucement Added succesfully") {
      openModal();
      setTimeout(() => {
        dispatch(emptyMessage());
      }, 3000);
      setState({
        ...state,
        city: "",
        batch: "",
        institute: "",
        course: "",
        lastDate: "",
        courseSlots: [],
        courseSlot: "",
        courseDura: "Select Month",
        courseStatus: false,
      });
    } else if (message == "Course Not Annoucement Added succesfully") {
      openModal();
      setTimeout(() => {
        dispatch(emptyMessage());
      }, 3000);
    } else if (message == "") {
      closeModal();
    }
  }, [loading, message]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Header />
      <div className="banner-img1">{/* <Banner1 /> */}</div>
      <div className="sidebar-banner-container" style={{ display: "flex" }}>
        <SideBar />

        <div className="container-fluid">
          <Modal
            visible={modalVisible}
            width="400"
            height="200"
            effect="fadeInUp"
            onClickAway={() => closeModal()}
          >
            <div className="p-2">
              <div className="row mt-1">
                <img
                  src={Logos}
                  style={{ width: 200, height: 50, marginLeft: 100 }}
                />
              </div>
              <p className="font-weight-bold mt-5"> Note: {message}</p>
              <a
                className="btn btn-danger"
                style={{ position: "absolute", right: 10, bottom: 10 }}
                href="javascript:void(0);"
                onClick={() => closeModal()}
              >
                Close
              </a>
            </div>
          </Modal>

          <div className="row justify-content-center">
            <div className="col-md-8 p-5 text-white text-center">
              <h1 className="color title fs-2">Open New Course Admissions</h1>
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select City</p>
              <select
                className="inp "
                onChange={(e) => {
                  setData(
                    e.target.value,
                    "city",
                    "cityCode",
                    "chkCity",
                    cityList
                  );
                }}
                //   value={state.city}
              >
                {cityList.map((e, i) => {
                  return (
                    <option key={i} value={i}>
                      {e.label.charAt(0).toUpperCase() + e.label.slice(1)}
                    </option>
                  );
                })}
              </select>
              {state.chkCity ? (
                <p className="text-danger">Select City</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select Institute</p>
              <select
                className="inp"
                onChange={(e) => {
                  setData(
                    e.target.value,
                    "institute",
                    "instituteCode",
                    "chkInstitute",
                    instituteList
                  );
                }}
                //  value={state.institute}
              >
                {instituteList.map((e, i) => {
                  return (
                    <option key={i} value={i}>
                      {e.label.charAt(0).toUpperCase() + e.label.slice(1)}
                    </option>
                  );
                })}
              </select>
              {state.chkInstitute ? (
                <p className="text-danger">Select Institute</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select Course</p>
              <select
                className="inp"
                onChange={(e) => {
                  setData(
                    e.target.value,
                    "course",
                    "courseId",
                    "chkCourse",
                    courseList
                  );
                }}
              >
                {courseList.map((e, i) => {
                  return (
                    <option key={i} value={i}>
                      {e.label.charAt(0).toUpperCase() + e.label.slice(1)}
                    </option>
                  );
                })}
              </select>
              {state.chkCourse ? (
                <p className="text-danger">Select Course</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Enter Batch Number</p>
              <input
                type="number"
                // value={batch}
                className="inp"
                placeholder="Enter Batch Number 01"
                onChange={(e) => {
                  setState({
                    ...state,
                    batch: e.target.value,
                    chkBatch: false,
                  });
                }}
              />
              {state.chkBatch ? (
                <p className="text-danger">Enter Batch No Like 01</p>
              ) : null}
            </div>

            <div className="col-md-5 py-3 mr-1">
              <p className="color title">Last Date of Admission</p>
              <input
                type="date"
                //   value={lastDate}
                className="inp"
                placeholder="Enter Batch Number"
                onChange={(e) => {
                  setState({
                    ...state,
                    lastDate: e.target.value,
                    chkLastDate: false,
                  });
                }}
              />
              {state.chkLastDate ? (
                <p className="text-danger">Enter Date</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3 mr-3 row">
              <div className="col-md-10">
                <p className="color title">Course Slots</p>
                <input
                  type="text"
                  value={state.courseSlot}
                  className="inp"
                  placeholder="Enter Course Slots"
                  onChange={(e) => {
                    setState({
                      ...state,
                      courseSlot: e.target.value,
                      chkCourseSlot: false,
                    });
                  }}
                />
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    addCourseSlots();
                  }}
                  style={{ width: 80, height: 48, marginTop: 45 }}
                >
                  Add
                </button>
              </div>
              {state.chkCourseSlot ? (
                <p className="text-danger">Enter Course Slot</p>
              ) : null}
            </div>
            <div className="col-md-10">
              <p className="color title">Course Slot List</p>
              <div className="row ">
                {state.courseSlots.map((val, ind) => {
                  return (
                    <span key={ind} className="row" style={{ marginRight: 10 }}>
                      <li className="mr-2 mt-3">
                        {ind + 1}) {val}
                      </li>
                      <i
                        onClick={() => {
                          setState({
                            ...state,
                            courseSlots: state.courseSlots.slice(
                              state.courseSlots.indexOf(val, 1)
                            ),
                          });
                        }}
                        className="fa fa-times mr-4 mt-4 "
                        style={{ color: "red", fontSize: 10 }}
                        aria-hidden="true"
                      ></i>
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="col-md-12 py-3">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <p className="color title">Course Duration</p>
                  <select
                    className="inp"
                    onChange={(e) => {
                      setState({
                        ...state,
                        courseDura: e.target.value,
                        chkCourseDura: false,
                      });
                    }}
                  >
                    <option value="">Select Month</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  {state.chkCourseDura ? (
                    <p className="text-danger">Select Duration</p>
                  ) : null}
                </div>
                <div className="col-md-5">
                  <p className="color title"> Course Status</p>
                  <select
                    className="inp"
                    onChange={(e) => {
                      setState({
                        ...state,
                        courseStatus: e.target.value,
                        chkCourseStatus: false,
                      });
                    }}
                  >
                    <option value="">Select Status</option>
                    <option value={true}>Open</option>
                    <option value={false}>Closed</option>
                  </select>
                  {state.chkCourseStatus ? (
                    <p className="text-danger">Select Course Status</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="d-flex">
              {!loading ? (
                <button
                  className="prevbtn"
                  style={{ width: 150, height: 40, marginTop: 20 }}
                  onClick={() => {
                    addNewCourse();
                  }}
                >
                  add Course
                </button>
              ) : (
                <div className="spinner-border load" role="status" style={{}}>
                  <span className="visually-hidden"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
