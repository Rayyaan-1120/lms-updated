import React, { useState, useEffect } from "react";
// import Header from "../component/Header";
// import "./css/main.css";
// import InputField from "../component/inputField";
import { useSelector, useDispatch } from "react-redux";
import { CSVLink } from "react-csv";
import {
  regCityGet,
  regInstGet,
  courseAnnouceGet,
  stdRegistrationAdd,
} from "../../Redux/action/stdRegistration";
import {
  stdRegData,
  stdRegDataByEmail,
} from "../../Redux/action/stdRegData/stdRegData";
import AppDropDown from "../../component/regStdData/dropDown";
import "./index.css";
import Message from "../../component/Message";
import imgOne from "../../images/ai.jpeg";
import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger,
} from "react-bootstrap";
import NewSideBar from "../../component/mainAdminComponents/newSideBar";
import Header from "../../component/Header";

function RegStdData(props) {
  const [states, setStates] = useState({
    email: "",
    checkEmail: false,
    city: "",
    checkCity: false,
    institute: "",
    checkInstitute: false,
    course: "",
    checkCourse: false,
    courseTiming: "",
    checkCourseTiming: false,
    batch: "",
    checkBatch: false,
  });
  const [visible, setVisible] = useState(false);

  const [data, setData] = useState(null);
  const { courseAnnouceGets } = useSelector((state) => state.registerReducer);
  const { userData, error, loading, message } = useSelector(
    (state) => state.stdRegDataReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseAnnouceGet());
    // openModal();
  }, []);
  const checkField = (a) => {
    if (a != "") {
      return false;
    }
    return true;
  };
  const checkEmail = (a) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(a) === false) {
      // console.log("Email is Not Correct");
      return true;
    }
    return false;
  };

  const stdCheckData = () => {
    if (checkField(states.city)) {
      setStates({
        ...states,
        checkCity: true,
      });
    } else if (checkField(states.institute)) {
      setStates({
        ...states,
        checkInstitute: true,
      });
    } else if (checkField(states.course)) {
      setStates({
        ...states,
        checkCourse: true,
      });
    } else if (checkField(states.batch)) {
      setStates({
        ...states,
        checkBatch: true,
      });
    } else {
      dispatch(
        stdRegData(states.city, states.institute, states.course, states.batch)
      );
    }
  };
  const stdCheckDataByEmail = () => {
    if (checkField(states.email) || checkEmail(states.email)) {
      setStates({
        ...states,
        checkEmail: true,
      });
    } else {
      dispatch(stdRegDataByEmail(states.email));
    }
  };
  const downloadPdf = async () => {
    let datas = await courseAnnouceGets.filter((name) => {
      return (
        name.courseName.toLowerCase().indexOf(data.course.toLowerCase()) >= 0 &&
        name.instituteName
          .toLowerCase()
          .indexOf(data.institute.toLowerCase()) >= 0
      );
    });
    console.log(datas, "datassccc");
    props.history.push("/adminPdf", { state: data, datas: datas[0] });

    // console.log(data);
  };

  // function handleClose() {
  //   setModal(false);
  // }

  // const openModal = () => {
  //   setVisible(true);
  // };

  // const closeModal = () => {
  //   setVisible(false);
  // };

  const headers = [
    { label: "Id", key: "generatedId" },
    { label: "Full Name", key: "fullName" },
    { label: "Father Name", key: "fatherName" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "guardian/Parent Number", key: "guardianNumber" },
    { label: "CNIC", key: "cnic" },
    { label: "City", key: "city" },
    { label: "institute", key: "institute" },
    { label: "Course", key: "course" },
    { label: "Batch", key: "batch" },
    { label: "Gender", key: "gender" },
    { label: "Roll No", key: "rollno" },
    { label: "Qualification", key: "qualification" },
    { label: "Class Time", key: "time" },
    { label: "Fees Status", key: "fees" },
    { label: "Registration Date", key: "date" },
  ];

  const csvData = {
    filename: "Report.csv",
    headers: headers,
    data: userData,
  };

  console.log(userData, "vuserData");
  // function handleShow() {
  //   setModal(true);
  // }
  console.log("data", data);
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <NewSideBar />
        </div>
        <div className="container-fluid">
          <div class="form-row my-4 ml-3 justify-content-evenly">
            <div class="form-group col-xl-1 col-lg-2 col-md-3 col-sm-12 mx-3">
              <AppDropDown
                labelName="City"
                propsArr={
                  courseAnnouceGets.length != 0
                    ? Array.from(
                        new Set(
                          courseAnnouceGets.map((a) => {
                            return a.cityName;
                          })
                        )
                      )
                    : []
                }
                onChange={(e) => {
                  setStates({
                    ...states,
                    city: e.target.value,
                    checkCity: false,
                    institute: e.target.value == "" ? "" : states.institute,
                  });
                }}
              />
              {states.checkCity ? (
                <p className="text-danger">Select City</p>
              ) : null}
            </div>
            <div class="form-group col-xl-1 col-lg-2 col-md-3 col-sm-12 mx-3">
              <AppDropDown
                labelName="Institute"
                // propsArr={[
                //   // "Select Course",
                //   "SAIMS ( WOW )",
                //   // "Python A.I",
                // ]}
                // propsArr={
                //   regInstGets.length != 0 ? regInstGets.map((a) => a.instName) : []
                // }
                propsArr={courseAnnouceGets
                  .filter((name) => {
                    return (
                      name.cityName
                        .toLowerCase()
                        .indexOf(states.city.toLowerCase()) >= 0
                    );
                  })
                  .map((filteredName, i) => {
                    return states.city ? filteredName.instituteName : null;
                  })}
                onChange={(e) => {
                  setStates({
                    ...states,
                    institute: e.target.value,
                    checkInstitute: false,
                    course: e.target.value == "" ? "" : states.course,
                  });
                  // console.log(e.target.value);
                }}
              />
              {states.checkInstitute ? (
                <p className="text-danger">Select Institute</p>
              ) : null}
            </div>
            <div class="form-group col-xl-1 col-lg-2 col-md-3 col-sm-12 mx-3">
              <AppDropDown
                labelName="Course"
                // propsArr={[
                //   "Select Course",
                //   "Web And Mobile",
                //   "Python A.I",
                // ]}
                propsArr={courseAnnouceGets
                  .filter((name) => {
                    return (
                      name.instituteName
                        .toLowerCase()
                        .indexOf(states.institute.toLowerCase()) >= 0
                    );
                  })
                  .map((filteredName, i) => {
                    return states.institute ? filteredName.courseName : null;
                  })}
                onChange={(e) => {
                  setStates({
                    ...states,
                    course: e.target.value,
                    checkCourse: false,
                  });

                  // console.log(e.target.value);
                }}
              />
              {states.checkCourse ? (
                <p className="text-danger">Select Course</p>
              ) : null}
            </div>

            <div class="form-group col-xl-1 col-lg-2 col-md-3 col-sm-12 mx-3">
              <AppDropDown
                labelName="Batch"
                // propsArr={[
                //   "Select Course",
                //   "Web And Mobile",
                //   "Python A.I",
                // ]}
                propsArr={courseAnnouceGets
                  .filter((name) => {
                    return (
                      name.courseName
                        .toLowerCase()
                        .indexOf(states.course.toLowerCase()) >= 0
                    );
                  })
                  .map((filteredName, i) => {
                    return states.course ? filteredName.batchNo : null;
                  })}
                onChange={(e) => {
                  setStates({
                    ...states,
                    batch: e.target.value,
                    checkBatch: false,
                  });

                  // console.log(e.target.value);
                }}
              />
              {states.checkBatch ? (
                <p className="text-danger">Select Batch</p>
              ) : null}
            </div>

            <div
              className="mx-5 mt-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-sm btn-success"
                style={{ width: 120, height: 40, fontSize: 20 }}
                onClick={stdCheckData}
              >
                Check
              </button>
            </div>
            <div class="form-group col-xl-3 col-lg-2 col-md-3 col-sm-12 mx-3">
              <label
                style={{ color: "#585962", fontSize: 15 }}
                for="inputPassword4"
              >
                Search by Email
              </label>

              <input
                id="inputEmail4"
                onChange={(e) => {
                  setStates({
                    ...states,
                    email: e.target.value,
                    checkEmail: false,
                  });

                  // console.log(e.target.value);
                }}
                placeholder="Seach by Student ID ...."
                style={{ fontSize: 13 }}
              />

              {states.checkEmail ? (
                <p className="text-danger">Enter Email</p>
              ) : null}
            </div>
            <div
              className="mx-3 mt-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-sm btn-success"
                style={{ width: 120, height: 40, fontSize: 20 }}
                onClick={stdCheckDataByEmail}
              >
                Search
              </button>
            </div>
          </div>
          <div>
            {userData && userData.length > 0 ? (
              <CSVLink
                style={{ fontSize: 18 }}
                className="btn btn-sm btn-warning ml-4 text-white"
                {...csvData}
              >
                Export CSV
              </CSVLink>
            ) : null}
          </div>

          <div className="d-flex justify-content-center">
            {loading && (
              <div className="spinner-border load" role="status" style={{}}>
                <span className="visually-hidden"></span>
              </div>
            )}
            {message === "Successfully Fetch Student" ? (
              <Message variant="success"> {message} </Message>
            ) : message && message != "" ? (
              <Message variant="success"> {message} </Message>
            ) : null}
          </div>

          <table id="data" className="my-4">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>CNIC</th>
              <th>Course</th>
              <th>Institute</th>
              <th>City</th>
              <th>Batch</th>
              <th>Timing</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {userData &&
              userData.map((data, ind) => {
                return (
                  <tr onClick={(e) => setData(data)}>
                    <td>{data.generatedId}</td>
                    <td>{data.fullName}</td>
                    <td>{data.fatherName}</td>
                    <td>{data.cnic}</td>
                    <td>{data.course}</td>
                    <td>{data.institute}</td>
                    <td>{data.city}</td>
                    <td>{data.batch}</td>
                    <td>{data.time}</td>
                    <td>{data.fees}</td>
                    <td
                      data-toggle="modal"
                      data-target="#staticBackdrop"
                      style={{ cursor: "pointer", color: "green" }}
                    >
                      {/* <Button bsStyle="primary" bsSize="large" onClick={handleShow}>
                    Launch demo modal
                  </Button>

                  <Modal show={modal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                  </Modal> */}
                      View
                    </td>
                  </tr>
                );
              })}
          </table>
          <div
            class="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Student Full Details
                  </h5>
                  <button
                    type="button"
                    class="btn btn-lg btn-primary "
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{ margin: "auto" }}
                    onClick={downloadPdf}
                  >
                    Download Pdf
                  </button>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {data && (
                  <div class="modal-body">
                    <img src={data.multiple_image} alt="" />
                    <p>
                      <span> _Id : </span> {data._id}
                    </p>
                    <p>
                      <span> Generated Id : </span>
                      {data.generatedId}
                    </p>
                    <p>
                      <span> Full Name : </span>
                      {data.fullName}
                    </p>
                    <p>
                      <span> Father Name : </span>
                      {data.fatherName}
                    </p>
                    <p>
                      <span> CNIC : </span>
                      {data.cnic}
                    </p>
                    <p>
                      <span> Email : </span>
                      {data.email}
                    </p>
                    <p>
                      <span> Phone Number : </span>
                      {data.phone}
                    </p>
                    <p>
                      <span>Parents/Guardian Number :</span>
                      {data.guardianNumber}
                    </p>
                    <p>
                      <span> Gender : </span>
                      {data.gender}
                    </p>
                    <p>
                      <span> Date Of Birth : </span>
                      {data.dob}
                    </p>
                    <p>
                      <span> Roll No : </span>
                      {data.rollno}
                    </p>
                    <p>
                      <span> Qualification : </span>
                      {data.qualification}
                    </p>
                    <p>
                      <span> City : </span>
                      {data.city}
                    </p>
                    <p>
                      <span> Address : </span>
                      {data.address}
                    </p>
                    <p>
                      <span> Institute : </span>
                      {data.institute}
                    </p>
                    <p>
                      <span> Course : </span>
                      {data.course}
                    </p>
                    <p>
                      <span> Batch : </span>
                      {data.batch}
                    </p>
                    <p>
                      <span> Date : </span>
                      {data.date}
                    </p>
                    <p>
                      <span> Time : </span>
                      {data.time}
                    </p>
                    <p>
                      <span> Fees Status : </span>
                      {data.fees}
                    </p>
                  </div>
                )}

                {/* <p>{data && data.fullName}</p> */}

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-lg btn-success"
                    data-dismiss="modal"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegStdData;
