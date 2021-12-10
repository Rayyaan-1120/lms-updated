import React, { useState, useEffect } from "react";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdminComponents/newSideBar";
import Banner1 from "../../component/mainAdmin/Banner1";
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-awesome-modal';
import Logos from '../../images/landscape_logo.png'
import { getallattendance, deleteattendance, closeattendance, openattendanceagain, Singleattendance } from "../../Redux/action/attendance";
import { FaTimes, FaCheck, FaEye } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import Attendanceloader from "../attendanceloader";
import Attstudentsgroup from "./attstudentsgroup";
import Toasti from "../toast";





export const Editattendance = () => {

    const dispatch = useDispatch()


    const { error, loading, attendance, attendanceloader } = useSelector(state => state.attendancereducer)
    const [courseSlot, setCourseSlot] = useState("");
    const [currentAttendance, setcurrentAttendance] = useState({});
    const [visible, setVisible] = useState(false);
    const [showstudents, setshowstudents] = useState(false)
    const [stdata, setstdata] = useState([])


    const editattendance = (e) => {
        const { _id, date, city, institute, course, batch, time, className, status, arrOfStudent } = e
        dispatch(closeattendance(_id, date, city, institute, course, batch, time, className, status, arrOfStudent))
    }




    useEffect(() => {
        dispatch(getallattendance())
    }, [dispatch])


    return (
        <div>
            {attendanceloader && <Attendanceloader />}
            <Toasti />
            <Modal
                visible={showstudents}
                width="1000"
                height="600"
                effect="fadeInUp"
                onClickAway={() => {
                    setshowstudents(false)

                }}
            >
                <FaTimes style={{ position: 'absolute', top: '4%', cursor: 'pointer', right: '3%', fontSize: '1.5rem', color: '#fff' }} onClick={() => setshowstudents(false)} />
                <Attstudentsgroup />
            </Modal>
            <Header />
            <div className="banner-img1">
                <Banner1 />
            </div>
            <div className="sidebar-banner-container" style={{ display: "flex" }}>
                <SideBar />
                <div className="container-fluid mt-3">

                    {
                        loading ?
                            <div className="spinner-border load" role="status" style={{ position: 'absolute', top: '50%', left: '50%', width: 60, height: 60, color: '#06693B', fontSize: 50 }}>
                                <span className="visually-hidden"></span>
                            </div>
                            :
                            <div className="row">
                                {attendance && attendance.map((e, i) => {
                                    return (

                                        <div className="col-md-6 py-2">
                                            <div className="rounded border border-info shadow p-4">
                                                <h5 className="color text-decoration-underline">
                                                    {e.course}{" "}
                                                    <br />
                                                    <span className="fs-5">Batch: {e.batch}</span>
                                                </h5>
                                                <p></p>
                                                <p>City: {e.city}</p>
                                                <p>Institute: {e.institute}</p>
                                                <h6 style={{ textAlign: 'left' }}>Timings: {e.time}</h6>
                                                <h6 style={{ textAlign: 'left' }}>Classname: {e.className}</h6>
                                                <div className="bg-light p-3 shadow rounded d-flex justify-content-between">
                                                    <div>
                                                        <h5 className="mt-3">
                                                            Status : {e.status ? "Open" : 'Closed'}
                                                        </h5>
                                                    </div>
                                                    <h4>
                                                        <button
                                                            className="btn btn-info shadow"
                                                            onClick={() => {

                                                                // eslint-disable-next-line no-lone-blocks
                                                                e.status ? editattendance(e) : dispatch(openattendanceagain(e._id))
                                                                //  editattendance(e)
                                                                //  document.body.style.overflow = 'hidden'
                                                            }}
                                                        >
                                                            {e.status ? <FaTimes /> : <FaCheck />}
                                                        </button>
                                                        <button
                                                            className="btn btn-danger shadow ml-1"
                                                            onClick={() => dispatch(deleteattendance(e))}
                                                        >
                                                            <GoTrashcan />
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary shadow ml-1"
                                                            onClick={() => {
                                                                dispatch(Singleattendance(e._id))
                                                                setshowstudents(true)
                                                            }

                                                            }
                                                        >
                                                            <FaEye />
                                                        </button>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                    }
                    <Modal
                        visible={visible}
                        width="1000"
                        height="600"
                        effect="fadeInUp"
                        onClickAway={() => {
                            setVisible(false)
                            document.body.style.overflow = 'auto'

                        }}


                    >
                        <div className="p-3" style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="color title my-2">Course Name</p>
                                    <input
                                        // value={
                                        //     currentAttendance.course
                                        // }
                                        className="form-control"
                                        onChange={(e) => {
                                            setcurrentAttendance({ ...currentAttendance, courseName: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <p className="color title my-2">City Name</p>
                                    <input
                                        className="form-control"
                                        // value={
                                        //     currentAttendance.city
                                        // }
                                        onChange={(e) => {
                                            // currentAttendance.courseName = e.target.value;
                                            setcurrentAttendance({ ...currentAttendance, city: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <p className="color title my-2">Institute Name</p>
                                    <input
                                        className="form-control"
                                        // value={
                                        //     currentAttendance.institute
                                        // }
                                        onChange={(e) => {
                                            // currentAttendance.courseName = e.target.value;
                                            setcurrentAttendance({ ...currentAttendance, institute: e.target.value });
                                        }}
                                    />
                                </div>

                                <div className="col-md-10 py-3 mr-3 row">
                                    <div className="col-md-6">

                                        <p className="color title">Course Slots</p>
                                        <input type="text"
                                            value={courseSlot}
                                            className="inp" placeholder="Enter Course Slots"
                                            style={{ height: 40 }}
                                            onChange={(e) => { setCourseSlot(e.target.value) }}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-success"
                                            //   onClick={()=>{addCourseSlots()}}
                                            style={{ width: 80, height: 40, marginTop: 45 }}>Add</button>
                                    </div>
                                    {/* {state.chkCourseSlot ? (
              <p className="text-danger">Enter Course Slot</p>
              ) : null} */}
                                </div>
                                <div className="col-md-10">
                                    <p className="color title">Course Slot List</p>
                                    <div className="row ">
                                        {
                                            currentAttendance.timings && currentAttendance.timings.map((val, ind) => {
                                                return <span key={ind} className='row' style={{ marginLeft: 20 }}><li className="mr-2 mt-3">{ind + 1}) {val}</li><i onClick={() => { }}
                                                    className="fa fa-times mr-4 mt-4 " style={{ color: 'red', fontSize: 10 }} aria-hidden="true"></i></span>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="color title my-2">Class Name</p>
                                    <input
                                        className="form-control"
                                        // value={
                                        //     currentAttendance.className
                                        // }
                                        onChange={(e) => {
                                            // currentAttendance.courseName = e.target.value;
                                            setcurrentAttendance({ ...currentAttendance, className: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <p className="color title my-2">Batch Name</p>
                                    <input
                                        className="form-control"
                                        // value={
                                        //     currentAttendance.batch
                                        // }
                                        onChange={(e) => {
                                            // currentAttendance.courseName = e.target.value;
                                            setcurrentAttendance({ ...currentAttendance, batch: e.target.value });
                                        }}
                                    />
                                </div>


                                <div className="col-md-6 mt-3">
                                    <p className="color title my-2">Course Status</p>
                                    <div className="col-md-6">
                                        {currentAttendance.status ? (
                                            <button
                                                className="btn btn-primary"
                                                // onClick={() => {

                                                //     setcurrentAttendance({ ...currentAttendance, status: false });
                                                // }}
                                                buttonValue="Close Registration"
                                            >
                                                Open
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-danger"

                                                onClick={() => {
                                                    setcurrentAttendance({ ...currentAttendance, status: true });
                                                }}
                                                buttonValue="Open Registration"
                                            >
                                                Closed
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 d-flex justify-content-between mt-5">
                                <button value="Save" className="btn btn-secondary"
                                    onClick={() => setVisible(false)}
                                >
                                    Cancel
                                </button>
                                {loading ?
                                    <div className="spinner-border load" role="status" style={{ width: 20, height: 20, color: '#06693B', fontSize: 20 }}>
                                        <span className="visually-hidden"></span>
                                    </div>
                                    : <button value="Save" className="btn btn-success"
                                    // onClick={() => saveCourse()} 
                                    >
                                        Update
                                    </button>}
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}