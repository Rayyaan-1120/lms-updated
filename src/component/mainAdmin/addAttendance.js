import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/bannerf.jpeg";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdminComponents/newSideBar";
import Banner from "../../component/mainAdmin/Banner";
import Banner1 from "../../component/mainAdmin/Banner1";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-awesome-modal";
import Logos from "../../images/landscape_logo.png";
import AppDropDown from "../dropDown";

import { courseAnnouceGet } from "../../Redux/action/stdRegistration";
// import ClassTimingDropDownAppDropDown from "./component/classTimingDropDown";
import ClassTimingDropDownAppDropDown from "../classTimingDropDown";
import { addattendancedata } from "../../Redux/action/attendance";
import { attendancereducer } from "../../Redux/reducer/attendancereducer";

const AddAttenndance = () => {
  const dispatch = useDispatch();
  const { courseAnnouceGets } = useSelector((state) => state.registerReducer);
  const [courseTimings, setCourseTimings] = useState(["Select Timing"]);
  const { message, loading, error } = useSelector(
    (state) => state.attendancereducer
  );
  console.log(courseTimings)
  const [state, setState] = useState({
    city: "",
    course: "",
    institute: "",
    courseTimings: "",
    batch: "",
    chkCity: false,
    chkInstitute: false,
    chkCourse: false,
    chkBatch: false,
    chkCourseStatus: false,
    checkCourseTiming: false,
    className: "",
    chkClassName: false,
    coursesArr: [],
  });
  useEffect(() => {
    dispatch(courseAnnouceGet());
  }, []);
  useEffect(() => {
    let arr = courseAnnouceGets
      .filter((name) => {
        return (
          name.courseName.toLowerCase().indexOf(state.course.toLowerCase()) >=
          0 &&
          name.instituteName
            .toLowerCase()
            .indexOf(state.institute.toLowerCase()) >= 0
        );
      })
      .map((filteredName, i) => {
        return state.course
          ? filteredName.timings
          : null;
      });

    setCourseTimings(arr[0]);
    setState({
      ...state,
      courseTiming: arr[0],
    });
  }, [state.course]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const checkField = (a) => {
    if (a != "") {
      return false;
    }
    return true;
  };

  //password 123456
  //email 
  //"KBJWM352"
  //03492014236basit@gmail.com
  const addingattendence = () => {
    const { city, course, batch, institute, courseTimings: time, className } = state;
    dispatch(
      addattendancedata(
        city,
        course,
        batch,
        institute,
        time,
        className
      )
    );
  };

  const setData = (a, b, c) => {
    setState({ ...state, [b]: a, [c]: false });
  };

  //      useEffect(()=>{
  // setState({...state,coursesArr:courseAnnouceGets
  //     .filter((name) => {
  //       return (
  //         name.instituteName
  //           .toLowerCase()
  //           .indexOf(state.institute.toLowerCase()) >= 0
  //       );
  //     })
  //     .map((filteredName, i) => {
  //         return  filteredName.courseName

  //     })})
  //      },[state.institute])
  console.log(state, "state");

  // if (checkField(state.city)) {
  //   setState({
  //     ...state,
  //     checkCity: true,
  //   });
  // } else if (checkField(state.institute)) {
  //   setState({
  //     ...state,
  //     checkInstitute: true,
  //   });
  // } else if (checkField(state.course)) {
  //   setState({
  //     ...state,
  //     checkCourse: true,
  //   });
  // } else if (checkField(state.courseTiming)) {
  //   setState({
  //     ...state,
  //     checkCourseTiming: true,
  //   });
  // }

  console.log(courseAnnouceGets);
  return (
    <div>
      <Header />
      <div className="banner-img1">
        <Banner1 />
      </div>
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
              <p className="font-weight-bold mt-5"> Note: </p>
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
              <h1 className="color title fs-2">Add Attendance</h1>
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select City</p>
              <AppDropDown
                labelName="City"
                propsArr={
                  courseAnnouceGets.length != 0
                    ? Array.from(
                      new Set(
                        courseAnnouceGets.map((a) => {
                          return a.viewForm ? a.cityName : null;
                        })
                      )
                    )
                    : []
                }
                onChange={(e) => {
                  setState({
                    ...state,
                    city: e.target.value,
                    checkCity: false,
                    institute: e.target.value == "" ? "" : state.institute,
                  });
                  // console.log(e.target.value);
                }}
              />
              {state.chkCity ? (
                <p className="text-danger">Select City</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select Institute</p>
              <AppDropDown
                labelName="Institute"
                // propsArr={["Select Institute", "BMJ", "Saylani"]}
                // propsArr={
                //   regInstGets.length != 0
                //     ? regInstGets.map((a) => a.instName)
                //     : []
                // }
                propsArr={Array.from(
                  new Set(
                    courseAnnouceGets
                      .filter((name) => {
                        return (
                          name.cityName
                            .toLowerCase()
                            .indexOf(state.city.toLowerCase()) >= 0
                        );
                      })
                      .map((filteredName, i) => {
                        return state.city ? filteredName.instituteName : null;
                      })
                  )
                )}
                onChange={(e) => {
                  setState({
                    ...state,
                    institute: e.target.value,
                    chkInstitute: false,
                    course: e.target.value == "" ? "" : state.course,
                  });
                  // console.log(e.target.value);
                }}
              />
              {state.chkInstitute ? (
                <p className="text-danger">Select Institute</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select Course</p>
              <AppDropDown
                labelName="Course"
                propsArr={courseAnnouceGets
                  .filter((name) => {
                    return (
                      name.instituteName
                        .toLowerCase()
                        .indexOf(state.institute.toLowerCase()) >= 0
                    );
                  })
                  .map((filteredName, i) => {
                    return state.institute ? filteredName.courseName : null;
                  })}
                onChange={(e) => {
                  setState({
                    ...state,
                    course: e.target.value,
                    chkCourse: false,
                  });

                  // console.log(e.target.value);
                }}
              />
              {state.chkCourse ? (
                <p className="text-danger">Select Course</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Enter Batch Number</p>
              <AppDropDown
                labelName="Batch"
                propsArr={Array.from(
                  new Set(
                    courseAnnouceGets
                      .filter((name) => {
                        return (
                          name.courseName
                            .toLowerCase()
                            .indexOf(state.course.toLowerCase()) >= 0
                        );
                      })
                      .map((filteredName, i) => {
                        return state.course ? filteredName.batchNo : null;
                      })
                  )
                )}
                onChange={(e) => {
                  setState({
                    ...state,
                    batch: e.target.value,
                    chkBatch: false,
                  });

                  // console.log(e.target.value);
                }}
              />
              {state.chkBatch ? (
                <p className="text-danger">Select Batch</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <ClassTimingDropDownAppDropDown
                labelName="Timing"
                propsArr={courseTimings}
                onChange={(e) => {
                  setState({
                    ...state,
                    courseTimings: e.target.value,
                    checkCourseTiming: false,
                  });
                  // console.log(e.target.value);
                }}
              />
            </div>

            <div className="col-md-5 py-3">
              <p className="color title">Enter Class name</p>
              <input
                type="text"
                // value={className}
                className="inp"
                placeholder="Enter Class name"
                onChange={(e) => {
                  setState({
                    ...state,
                    className: e.target.value,
                    chkClassName: false,
                  });
                }}
              />
              {state.chkClassName ? (
                <p className="text-danger">Enter Your Class name</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              {loading ? (
                <div className="spinner-border load" role="status" style={{}}>
                  <span className="visually-hidden"></span>
                </div>
              ) : (
                <button
                  className="prevbtn"
                  style={{ width: 150, height: 40, marginTop: 50 }}
                  onClick={addingattendence}
                >
                  mark Attendance
                </button>
              )}
              {error && alert(error.message)}
            </div>

            {/* <div className="col-md-5 py-3 mr-1"> */}
            {/* <p className="color title">Last Date of Admission</p> */}
            {/* <input type="date" 
              value={lastDate}
               className="inp" placeholder="Enter Batch Number"
               onChange={(e) => { setState({...state,lastDate:e.target.value ,chkLastDate:false}) }} 
               /> */}
            {/* {state.chkLastDate ? (
                <p className="text-danger">Enter Date</p>
              ) : null} */}
            {/* </div> */}
            {/* <div className="col-md-5 py-3 mr-3 row">
                <div className="col-md-10">
    
              <p className="color title">Course Slots</p>
              <input type="text" 
              value={state.courseSlot}
            className="inp" placeholder="Enter Course Slots"
            //    onChange={(e) => { setState({...state,courseSlot:e.target.value ,chkCourseSlot:false}) }} 
            />
                  </div>
                  <div className="col-md-2">
                  <button className="btn btn-success" onClick={()=>{addCourseSlots()}} style={{width:80,height:48,marginTop:45}}>Add</button>
                  </div>
              {state.chkCourseSlot ? (
                  <p className="text-danger">Enter Course Slot</p>
                  ) : null}
            </div>
            <div className="col-md-10">
                <p className="color title">Course Slot List</p>
            <div className="row ">
    {
        state.courseSlots.map((val,ind)=>{
            return <span key={ind} className='row' style={{marginRight:10}}><li className="mr-2 mt-3">{ind+1}) {val}</li><i onClick={()=>{ 
                setState({...state,courseSlots:state.courseSlots.slice(state.courseSlots.indexOf(val, 1))})
            }} className="fa fa-times mr-4 mt-4 " style={{color:'red',fontSize:10}} aria-hidden="true"></i></span>
        })
    }
            </div>
            </div> */}
            {/* <div className="col-md-12 py-3">
              <div className="row justify-content-center">
                <div className="col-md-5"> */}
            {/* <p className="color title">Course Duration</p> */}
            {/* <select className="inp"
                   onChange={(e) => { setState({...state,courseDura:e.target.value ,chkCourseDura:false}) }} 
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
                  </select> */}
            {/* {state.chkCourseDura ? (
                    <p className="text-danger">Select Duration</p>
                  ) : null} */}
            {/* </div> */}
            {/* <div className="col-md-5">
                  <p className="color title"> Course Status</p> */}
            {/* <select className="inp" 
                //   onChange={(e) => { setState({...state,courseStatus:e.target.value ,chkCourseStatus:false}) }} 
                  >
                    <option value="">Select Status</option>
                    <option value={true}>Open</option>
                    <option value={false}>Closed</option>
                  </select> */}
            {/* {state.chkCourseStatus ? (
                    <p className="text-danger">Select Course Status</p>
                  ) : null} */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            <div className="d-flex">
              {/* {
        !loading? */}

              {/* :
    <div className="spinner-border load" role="status" style={{}}>
    <span className="visually-hidden"></span>
    </div>
            } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAttenndance;
