import React, { useState, useEffect } from "react";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdminComponents/newSideBar";
import Banner1 from "../../component/mainAdmin/Banner1";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-awesome-modal";
import Logos from "../../images/landscape_logo.png";
import AppDropDown from "../dropDown";

import { courseAnnouceGet } from "../../Redux/action/stdRegistration";
import ClassTimingDropDownAppDropDown from "../classTimingDropDown";
import { addattendancedata } from "../../Redux/action/attendance";
import { addassignment } from "../../Redux/action/assignment"
import Toasti from "../toast";

const AddAssignment = () => {
    const dispatch = useDispatch();
    const { courseAnnouceGets } = useSelector((state) => state.registerReducer);
    const [courseTimings, setCourseTimings] = useState(["Select Timing"]);
    const { message, loading, error, assignments } = useSelector(
        (state) => state.assignmentreducer
    );
    console.log(assignments)
    console.log(courseTimings)
    const [state, setState] = useState({
        city: "",
        course: "",
        institute: "",
        courseTimings: "",
        batch: "",
        details: "",
        deadline: "",
        assignmentName: "",
        totalMarks:"",
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
    const addingassignment = () => {
        const { city, course, batch, institute, courseTimings: time, details, deadline, assignmentName,totalMarks } = state;
        dispatch(
            addassignment(
                city,
                institute,
                batch,
                course,
                time,
                deadline,
                details,
                assignmentName,
                totalMarks
            )
        );
    };

    const setData = (a, b, c) => {
        setState({ ...state, [b]: a, [c]: false });
    };


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
            <Toasti />
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
                            <h1 className="color title fs-2">Add assignment</h1>
                        </div>
                        <div className="col-md-5 py-3">
                            {/* <p className="color title">Select City</p> */}
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
                            {/* <p className="color title">Select Institute</p> */}
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
                            {/* <p className="color title">Select Course</p> */}
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
                            {/* <p className="color title">Enter Batch Number</p> */}
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
                        <div className="col-md-10 py-3">
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


                        <div className="col-md-10 py-3">
                            <p className="color title">Assignment name</p>
                            <input
                                type="text"
                                // value={className}
                                className="inp"
                                placeholder="Assignment name"
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        assignmentName: e.target.value,
                                    });
                                }}
                            />
                            {state.chkClassName ? (
                                <p className="text-danger">Enter Assignment name</p>
                            ) : null}
                        </div>
                        <div className="col-md-5 py-3">
                            <p className="color title">Assignment deadline</p>
                            <input
                                type="date"
                                // value={className}
                                className="inp"
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        deadline: e.target.value,
                                    });
                                }}
                            />
                            {state.chkClassName ? (
                                <p className="text-danger">Enter Assignment deadline</p>
                            ) : null}
                        </div>
                        <div className="col-md-5 py-3">
                            <p className="color title">Assignment Marks</p>
                            <input
                                type="number"
                                // value={className}
                                className="inp"
                                placeholder="Assignment Marks"
                                onChange={(e) => {
                                   setState({
                                       ...state,
                                       totalMarks:e.target.value
                                   })
                                }}
                            />
                            {state.chkClassName ? (
                                <p className="text-danger">Enter Assignment Marks</p>
                            ) : null}
                        </div>
                        <div className="col-md-10 py-3">
                            <textarea
                                // value={className}
                                style={{ resize: 'none' }}

                                className="inp"
                                placeholder="Assignment details"
                                rows={6}
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        details: e.target.value,
                                    });
                                }}
                            />
                            {state.chkClassName ? (
                                <p className="text-danger">Enter Assignment deadline</p>
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
                                    style={{ width: '100%', height: 40, }}
                                    onClick={addingassignment}
                                >
                                    Add Assignment
                                </button>
                            )}
                            {error && alert(error.message)}
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAssignment;