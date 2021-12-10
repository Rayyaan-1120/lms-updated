import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import "./registration.css";
import AppDropDown from "../component/dropDown";
import ClassTimingDropDownAppDropDown from "../component/classTimingDropDown";
import InputField from "../component/inputField";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import Recaptcha from "react-recaptcha";

import {
  regCityGet,
  regInstGet,
  courseAnnouceGet,
  stdRegistrationAdd,
} from "../Redux/action/stdRegistration";
import axios from "axios";
import Message from "../component/Message";
const Registration = (props) => {
  const [changeScreen, setChangeScreen] = useState(true);
  const [courseTimings, setCourseTimings] = useState(["Select Timing"]);
  const [captcha, setCaptcha] = useState(false);
  const history = useHistory();
  const [states, setStates] = useState({
    city: "",
    checkCity: false,
    institute: "",
    checkInstitute: false,
    course: "",
    checkCourse: false,
    courseTiming: "",
    checkCourseTiming: false,
    fullName: "",
    checkFullName: false,
    fatherGurName: "",
    checkFatherGurName: false,
    email: "",
    checkEmail: false,
    phNumber: "",
    checkPhNumber: false,
    fatherGurPhNum: "",
    checkFatherGurPhNum: false,
    cnic: "",
    checkCnic: false,
    gender: "",
    checkGender: false,
    dob: "",
    checkDob: false,
    address: "",
    checkAddress: false,
    qualification: "",
    checkQualification: false,
    img: "",
    checkImg: false,
    checkPhNumberLeng: false,
    checkFatherGurPhNumLeng: false,
    checkCnicLeng: false,
  });
  const { regCityGets, regInstGets, courseAnnouceGets } = useSelector(
    (state) => state.registerReducer
  );
  const { loading, error, message,stdRegData} = useSelector(
    (state) => state.stdregistrationReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(regCityGet());
    // dispatch(regInstGet());
    dispatch(courseAnnouceGet());
  }, []);

  // console.log(stdRegData);
  // console.log(regCityGets.length != 0 ? regCityGets[0]["cityName"] : null);

  const checkNumber = (e, reference) => {
    let b = e.target.value;
    let phoneno = /^[0-9-+]+$/;

    if (b.match(phoneno)) {
      return true;
    } else {
      alert("Please Enter Number Not Characer or any of these(. @ , - _)");
      setStates({
        ...states,
        checkPhNumber: true,
      });
      return false;
    }
  };
  const checkEmail = (a) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(a) === false) {
      // console.log("Email is Not Correct");
      return true;
    }
    return false;
  };

  const checkField = (a) => {
    if (a != "") {
      return false;
    }
    return true;
  };

  useEffect(() => {
    let arr = courseAnnouceGets
      .filter((name) => {
        console.log(name)

        return (
          name.courseName.toLowerCase().indexOf(states.course.toLowerCase()) >=
            0 &&
          name.instituteName
            .toLowerCase()
            .indexOf(states.institute.toLowerCase()) >= 0
        );
      })
      .map((filteredName, i) => {
        return filteredName.viewForm && states.course
          ? filteredName.timings
          : null;
      });

    console.log(arr[0]);
    setCourseTimings(arr[0]);
    // setStates({
    //   ...states,
    //   courseTiming: arr[0],
    // });
  }, [states.course]);

  const toPdf = () => {
    if (message === "User Form succesfully submitted") {
      props.history.push("/pdf");
    }
  };

  const onSubmit = (e) => {
    // console.log(classTime());
    // e.preventDefault();
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
    } else if (checkField(states.courseTiming)) {
      setStates({
        ...states,
        checkCourseTiming: true,
      });
    } else if (checkField(states.fullName)) {
      setStates({
        ...states,
        checkFullName: true,
      });
    } else if (checkField(states.fatherGurName)) {
      setStates({
        ...states,
        checkFatherGurName: true,
      });
    } else if (checkField(states.email) || checkEmail(states.email)) {
      setStates({
        ...states,
        checkEmail: true,
      });
    } else if (checkField(states.phNumber)) {
      setStates({
        ...states,
        checkPhNumber: true,
      });
    }
    // else if(states.phNumber.length > 11 ||
    //   states.phNumber.length < 11){
    //     setStates({
    //       ...states,
    //       checkPhNumberLeng: true,
    //     });

    //   }
    else if (checkField(states.fatherGurPhNum)) {
      setStates({
        ...states,
        checkFatherGurPhNum: true,
      });
    }

    // else if(states.fatherGurPhNum.length > 11 ||
    //   states.fatherGurPhNum.length < 11){
    //     setStates({
    //       ...states,
    //       checkFatherGurPhNumLeng: true,
    //     });

    //   }
    else if (checkField(states.cnic)) {
      setStates({
        ...states,
        checkCnic: true,
      });
    }
    // else if( states.cnic.length > 13 ||
    //   states.cnic.length < 13){
    //     setStates({
    //       ...states,
    //       checkCnicLeng: true,
    //     });
    //     window.scrollTo(0, 400);
    //   }
    else if (checkField(states.gender)) {
      setStates({
        ...states,
        checkGender: true,
      });
    } else if (checkField(states.dob)) {
      setStates({
        ...states,
        checkDob: true,
      });
    } else if (checkField(states.address)) {
      setStates({
        ...states,
        checkAddress: true,
      });
    } else if (checkField(states.qualification)) {
      setStates({
        ...states,
        checkQualification: true,
      });
    } else if (checkField(states.img)) {
      setStates({
        ...states,
        checkImg: true,
      });
    } else if (Number(states.dob.slice(0, 4)) > 2015) {
      alert("Select correct Date of Birth");
    } else {
      var datas = courseAnnouceGets.filter((name) => {
        return (
          name.courseName.toLowerCase().indexOf(states.course.toLowerCase()) >=
            0 &&
          name.instituteName
            .toLowerCase()
            .indexOf(states.institute.toLowerCase()) >= 0
        );
      });

      dispatch(stdRegistrationAdd(states,datas));

      // console.log(datas);
      // console.log("Hello World", states.city, "Hello World");
      // if (captcha) {
      // } else {
      //   alert("plz verify you are human");
      // }
    }
  };


  // if (message === "User Form succesfully submitted") {
  //   // alert('User Form succesfully submitted')
  // }
  // console.log(states, "setStatessetStatessetStates", courseTimings);
  // const loaded = () => {
  //   // console.log("loaded");
  // };
  // const verify = (response) => {
  //   if (response) {
  //     setCaptcha(true);
  //     // console.log("verify");
  //   }
  // };

  // console.log(states.dob.slice(0, 4), "adakhdk");
  return (
    <div>
      <Header />
      <div
        className="form-con"
        style={{
          backgroundColor: "white",
          // height: "85vh",
          width: "100%",
          paddingTop: "2%",
        }}
      >
        <div
          className="form-main"
          style={{
            backgroundColor: "white",
            width: "70%",
            padding: 30,
            borderRadius: 5,
            margin: "auto",
            boxShadow:
              " 0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 2px  10px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          {changeScreen ? (
            <div>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <h2 style={{ color: "#006838" }}>Registration Form</h2>
              </div>

              {/* <form
                onSubmit={onSubmit}
                className="container"
                style={{ marginTop: "5%" }}
              > */}
              <div class="form-row mb-4 justify-content-around">
                <div class="form-group col-md-3">
                  <AppDropDown
                    labelName="City"
                    // propsArr={["Select City", "Karachi", "Hyderabad"]}
                    // propsArr={
                    //   regCityGets.length != 0
                    //     ? regCityGets.map((a) => a.cityName)
                    //     : []
                    // }
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
                      setStates({
                        ...states,
                        city: e.target.value,
                        checkCity: false,
                        institute: e.target.value == "" ? "" : states.institute,
                      });
                      // console.log(e.target.value);
                    }}
                  />
                  {states.checkCity ? (
                    <p className="text-danger">Select City</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3">
                  <AppDropDown
                    labelName="Institute"
                    // propsArr={["Select Institute", "BMJ", "Saylani"]}
                    // propsArr={
                    //   regInstGets.length != 0
                    //     ? regInstGets.map((a) => a.instName)
                    //     : []
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
                        return filteredName.viewForm && states.city
                          ? filteredName.instituteName
                          : null;
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
                <div class="form-group col-md-3">
                  
                </div>
              </div>
              <div class="form-row mb-4 justify-content-around">
                <div class="form-group col-md-3">
                  <ClassTimingDropDownAppDropDown
                    labelName="Your Favourite Time ?"
                    propsArr={courseTimings}
                    // propsArr={courseAnnouceGets
                    //   .filter((name) => {
                    //     return (
                    //       name.courseName
                    //         .toLowerCase()
                    //         .indexOf(states.course.toLowerCase()) >= 0 &&
                    //       name.instituteName
                    //         .toLowerCase()
                    //         .indexOf(states.institute.toLowerCase()) >= 0
                    //     );
                    //   })
                    //   .map((filteredName, i) => {
                    //     return filteredName.viewForm && states.course
                    //       ? filteredName.timings
                    //       : null;
                    //   })}
                    onChange={(e) => {
                      setStates({
                        ...states,
                        courseTiming: e.target.value,
                        checkCourseTiming: false,
                      });
                      // console.log(e.target.value);
                    }}
                  />
                  {/* <AppDropDown
                      labelName="Course Timing"
                      // propsArr={[
                      //   "Select Timing",
                      //   "9 am - 11 am",
                      //   "7 pm - 11 pm",
                      // ]}
                      propsArr={courseAnnouceGets
                        .filter((name) => {
                          return (
                            name.courseName
                              .toLowerCase()
                              .indexOf(states.course.toLowerCase()) >= 0 &&
                            name.instituteName
                              .toLowerCase()
                              .indexOf(states.institute.toLowerCase()) >= 0
                          );
                        })
                        .map((filteredName, i) => {
                          return filteredName.viewForm && states.course
                            ? filteredName.timings
                            : null;
                        })}
                      propsArr={
                        states.courseTiming != 0 ? states.courseTiming : []
                      }
                      onChange={(e) => {
                        setStates({
                          ...states,
                          courseTiming: e.target.value,
                          checkCourseTiming: false,
                        });
                        // console.log(e.target.value);
                      }}
                    /> */}
                  {states.checkCourseTiming ? (
                    <p className="text-danger">Select Favourite Time</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3 ">
                  <InputField
                    labelName="Full Name"
                    type="text"
                    onChange={(e) => {
                      setStates({
                        ...states,
                        fullName: e.target.value,
                        checkFullName: false,
                      });
                    }}
                  />
                  {states.checkFullName ? (
                    <p className="text-danger">Enter Full Name</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3 ">
                  <InputField
                    labelName="Parents / Guardian Name"
                    type="text"
                    onChange={(e) => {
                      setStates({
                        ...states,
                        fatherGurName: e.target.value,
                        checkFatherGurName: false,
                      });
                    }}
                  />
                  {states.checkFatherGurName ? (
                    <p className="text-danger">Enter Parents / Guardian Name</p>
                  ) : null}
                </div>
              </div>
              <div class="form-row mb-4 justify-content-around">
                <div class="form-group col-md-3 ">
                  <InputField
                    labelName="Email ( Write email carefully )"
                    type="email"
                    placeholder="abc123@gmail.com"
                    onChange={(e) => {
                      setStates({
                        ...states,
                        email: e.target.value,
                        checkEmail: false,
                      });
                    }}
                  />
                  {states.checkEmail ? (
                    <p className="text-danger">Enter Email</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3 ">
                  <InputField
                    labelName="Contact Number"
                    typeField="number"
                    pattern="[0-9]*"
                    maxLength="11"
                    placeholder="03XXXXXXXXX"
                    onChange={(e) => {
                      // checkNumber(e);
                      setStates({
                        ...states,
                        phNumber: e.target.value,
                        checkPhNumber: false,
                        checkPhNumberLeng: false,
                      });
                    }}
                  />
                  {states.checkPhNumber ? (
                    <p className="text-danger">Enter Contact Number</p>
                  ) : null}
                  {states.checkPhNumberLeng ? (
                    <p className="text-danger">
                      Contact Number Should be 11 Digits
                    </p>
                  ) : null}
                </div>
                <div class="form-group col-md-3 ">
                  <InputField
                    labelName="Parents / Guardian Number"
                    typeField="number"
                    pattern="[0-9]*"
                    maxLength="11"
                    placeholder="03XXXXXXXXX"
                    onChange={(e) => {
                      // checkNumber(e);
                      setStates({
                        ...states,
                        fatherGurPhNum: e.target.value,
                        checkFatherGurPhNum: false,
                        checkFatherGurPhNumLeng: false,
                      });
                    }}
                  />
                  {states.checkFatherGurPhNum ? (
                    <p className="text-danger">
                      Enter Parents / Guardian Number
                    </p>
                  ) : null}
                  {states.checkFatherGurPhNumLeng ? (
                    <p className="text-danger">
                      Contact Number Should be 11 Digits
                    </p>
                  ) : null}
                </div>
              </div>
              <div class="form-row mb-4 justify-content-around">
                <div class="form-group col-md-3 ">
                  <InputField
                    labelName="CNIC / BForm"
                    typeField="number"
                    pattern="[0-9]*"
                    maxLength="13"
                    placeholder="4XXXXXXXXXXXXXX"
                    onChange={(e) => {
                      // checkNumber(e);
                      setStates({
                        ...states,
                        cnic: e.target.value,
                        checkCnic: false,
                        checkCnicLeng: false,
                      });
                    }}
                  />
                  {states.checkCnic ? (
                    <p className="text-danger">Enter CNIC</p>
                  ) : null}
                  {states.checkCnicLeng ? (
                    <p className="text-danger">CNIC Should be 13 Digits</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3 ">
                  {/* <AppDropDown
                      labelName="Gender"
                      propsArr={["Select Gender", "Male", "Female"]}
                      onChange={(e) => {
                        setStates({
                          ...states,
                          gender: e.target.value,
                          checkGender: false,
                        });
                      }}
                    /> */}
                  <label
                    style={{ fontWeight: "bold", color: "#585962" }}
                    for="inputState"
                  >
                    Gender
                  </label>
                  <span
                    style={{ paddingLeft: 2, color: "red" }}
                    class="required"
                  >
                    *
                  </span>
                  <select
                    id="inputState"
                    onChange={(e) => {
                      setStates({
                        ...states,
                        gender: e.target.value,
                        checkGender: false,
                      });
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {states.checkGender ? (
                    <p className="text-danger">Select Gender</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3" style={{ marginTop: -2 }}>
                  <label
                    style={{ fontWeight: "bold", color: "#585962" }}
                    for="inputPassword4"
                  >
                    Date of Birth
                  </label>
                  <span
                    style={{ paddingLeft: 2, color: "red" }}
                    class="required"
                  >
                    *
                  </span>
                  <input
                    type="date"
                    id="inputEmail4"
                    value={states.dob}
                    onChange={(e) => {
                      setStates({
                        ...states,
                        dob: e.target.value,
                        checkDob: false,
                      });
                    }}
                  />
                  {states.checkDob ? (
                    <p className="text-danger">Select Date</p>
                  ) : null}
                </div>
              </div>

              <div class="form-row mb-4 justify-content-around">
                <div class="form-group col-md-7">
                  <label
                    style={{ fontWeight: "bold", color: "#585962" }}
                    for="inputPassword4"
                  >
                    Permanent Address
                  </label>
                  <span
                    style={{ paddingLeft: 2, color: "red" }}
                    class="required"
                  >
                    *
                  </span>
                  <input
                    id="inputEmail4"
                    maxLength={60}
                    onChange={(e) => {
                      setStates({
                        ...states,
                        address: e.target.value,
                        checkAddress: false,
                      });
                    }}
                  />
                  {states.checkAddress ? (
                    <p className="text-danger">Enter Address</p>
                  ) : null}
                </div>
                <div class="form-group col-md-3">
                  <AppDropDown
                    labelName="Last Qualification"
                    propsArr={[
                      "Under Matric",
                      "Matric / O-Level",
                      "Intermediate / A-Level",
                      "Graduate",
                      "Masters",
                      "PHD",
                    ]}
                    onChange={(e) => {
                      setStates({
                        ...states,
                        qualification: e.target.value,
                        checkQualification: false,
                      });
                    }}
                  />
                  {states.checkQualification ? (
                    <p className="text-danger">Select Qualification</p>
                  ) : null}
                </div>
              </div>
              <div class="form-row mb-4 justify-content-around">
                <div className="col-md-8">
                  <label style={{ fontWeight: "bold", color: "#585962" }}>
                    Passport Size Profile Image (Face Front and Decent picture)
                  </label>
                  <br />
                  <input
                    type="file"
                    className="uploadCV"
                    name="profileImg"
                    style={{
                      border: "1px dotted #006838",
                      padding: 20,
                      width: "88%",
                    }}
                    accept="image/*"
                    onChange={(e) => {
                      setStates({
                        ...states,
                        img: e.target.files,
                        checkImg: false,
                      });
                    }}
                  />
                  {states.checkImg ? (
                    <p className="text-danger">Select Image</p>
                  ) : null}
                </div>
                <div className="col-md-2"></div>
                {/* <div
                className="captcha-res col-md-2 mt-5 d-flex justify-content-center "
                style={{
                  width:'80%',
position:'relative',
top:-20,left:-20,
                  // display: "flex",
                  // justifyContent: "flex-start",
                  // alignItems: "center",
                  // margin: "20px 50px",
                }}
              >
                <Recaptcha
                  sitekey="6Ldgd4MbAAAAAKWJZNVZ5yMlhO06nmDDtHuIf66M"
                  onloadCallback={loaded}
                  verifyCallback={verify}
                />
              </div> */}
                {/* {error && <Message variant="danger">{error}</Message>} */}
              </div>

              <div className="col-md-12 mt-5 d-flex justify-content-center ml-5">
                {loading ? (
                  <div className="spinner-border load" role="status" style={{}}>
                    <span className="visually-hidden"></span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success btn-lg butt"
                    onClick={() => onSubmit()}
                    style={{
                      backgroundColor: "#006838",
                      width: 300,
                      height: 51,
                    }}
                  >
                    Submit Form
                  </button>
                )}
              </div>
              <div
                className="error-res"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "20px 50px",
                }}
              >
                {message === "Duplicate Data" && (
                  <Message variant="warning">{message}</Message>
                )}
                {message === "User Form succesfully submitted" &&
                (window.scrollTo(40,0),
                  props.history.push("/pdf"))}
                {error && <Message variant="danger">{error}</Message>}
              </div>
              {/* </form> */}
            </div>
          ) : (
            <>
              <div>
                <div
                  className="container"
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                  }}
                >
                  <h2 style={{ fontWeight: "600", color: "#006838" }}>
                    Select Profile Image
                  </h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
