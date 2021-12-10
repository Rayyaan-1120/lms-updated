// import { useEffect, useState } from "react";
// import { useHistory, Link } from "react-router-dom";
// import Header from "../../component/Header";
// // import firebase from "./../../../config/firebase";
// // import Navbar from "./../../../layouts/Navbar";
// // import Settings_Panel from "./../../../layouts/Settings_Panel";
// // import RightSidebar from "./../../../layouts/RightSidebar";
// // import Footer from "./../../../layouts/Footer";
// import "./attemptQuiz.css";
// import axios from "axios";
// const View = () => {
//   const history = useHistory();
//   const [api, setApi] = useState("https://jawan-tech-backend.herokuapp.com/");
//   const [data, setdata] = useState([]);
//   const [modalData, setModalData] = useState([]);
//   const [secretKey, setSecretKey] = useState([]);
//   const [quizzes, setQuizzes] = useState([]);

//   const [topics, setTopics] = useState([]);

//   const [institute, setInstitute] = useState("");

//   const [course, setCourse] = useState("");

//   const [checkSecurityKey, setCheckSecurityKey] = useState(true);

//   const [checkEmpty, setCheckEmpty] = useState(false);

//   const [loading, setLoading] = useState(false);

//   let oneTopic = null;

//   const [securityKey, setSecurityKey] = useState("");

//   const [security, setSecurity] = useState("");

//   const [customClassName, setCustomClassName] = useState(false);

//   // console.log("first " + institute, "first " + course);

//   //   useEffect(() => {
//   //     firebase.auth().onAuthStateChanged((user) => {
//   //       if (user) {
//   //         fetchSecurityKey();
//   //         /* fetchUserDetail();
//   //         fetchQuizzes(); */

//   //         var uid = user.uid;
//   //         console.log(uid);
//   //         var user = user.displayName;

//   //         firebase
//   //           .database()
//   //           .ref(`AllUsers/User/${uid}/AllData/profile/otherDetails/institute`)
//   //           .on("value", (datasnap) => {
//   //             let insitute = datasnap.val();
//   //             setInstitute(datasnap.val());
//   //             console.log(datasnap.val());

//   //             firebase
//   //               .database()
//   //               .ref(`AllUsers/User/${uid}/AllData/profile/otherDetails/course`)
//   //               .on("value", (datasnap) => {
//   //                 // console.log(datasnap.val())
//   //                 let course = datasnap.val();
//   //                 setCourse(datasnap.val());
//   //                 console.log(datasnap.val());

//   //                 firebase
//   //                   .database()
//   //                   .ref(`quizzes/${insitute}/${course}`)
//   //                   .on("value", (datasnap) => {
//   //                     let quizes = datasnap.val();
//   //                     /* if (quizes.length === -1) {
//   //                       setLoading(true);
//   //                     } */

//   //                     let enabled = [];
//   //                     let keys = Object.keys(quizes);
//   //                     let totalQuizes = keys.length;
//   //                     for (var i = 0; i < totalQuizes; i++) {
//   //                       if (quizes[keys[i]].visible === "On")
//   //                         enabled.push(keys[i]);
//   //                       if (i === totalQuizes - 1) setdata(enabled);
//   //                       setLoading(false);
//   //                       console.log(i, quizes);
//   //                     }
//   //                   });
//   //               });
//   //           });
//   //       } else if (
//   //         !localStorage.getItem("success") ||
//   //         !sessionStorage.getItem("authorized")
//   //       ) {
//   //         firebase.auth().signOut();
//   //         history.replace("/admin");
//   //       } else {
//   //         localStorage.removeItem("success");
//   //         sessionStorage.removeItem("authorized");
//   //         firebase.auth().signOut();
//   //         history.replace("/admin");
//   //       }
//   //     });
//   //   }, []);

//   //   const fetchSecurityKey = async () => {
//   //     try {
//   //       const data = await firebase.database().ref("/security");

//   //       data.once("value", (data) => {
//   //         setSecurity(data.val().key);
//   //       });
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   useEffect(() => {
//     const headers = { "Content-Type": "application/json" };

//     axios
//       .get(`${api}quiz/stdQuizGet`, {}, { headers })
//       .then((res) => {
//         setdata(res.data.data);
//       })
//       .catch((err) => {
//         // console.log(err);
//       });

//     axios
//       .get(`${api}quiz/quizKeyGet`, {}, { headers })
//       .then((res) => {
//         setSecretKey(res.data.data[0].keyVal, "key");
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   }, []);
//   const handleChange = (e) => {
//     setSecurityKey(e.target.value);
//   };

//   //   const submitForm = (e) => {
//   //     e.preventDefault();

//   //     if (securityKey === "") {
//   //       setCheckEmpty(true);

//   //       setTimeout(() => {
//   //         setCheckEmpty(false);
//   //       }, 2000);
//   //     } else {
//   //       if (securityKey !== security) {
//   //         setCheckSecurityKey(false);

//   //         setTimeout(() => {
//   //           setCheckSecurityKey(true);
//   //         }, 2000);
//   //       } else {
//   //         setCheckSecurityKey(true);
//   //       }

//   //       securityKey === security
//   //         ? history.replace("/user/quiz")
//   //         : history.replace("/user/quizzes");

//   //       localStorage.setItem("topic", oneTopic);
//   //     }
//   //   };

//   const openModal = () => {
//     setCustomClassName(true);
//   };

//   const closeModal = () => {
//     setCustomClassName(false);
//   };

//   console.log(secretKey);

//   const submitForm = (e) => {
//     e.preventDefault();
//     // console.log("sadsadsads");
//     if (securityKey === "") {
//       setCheckEmpty(true);

//       setTimeout(() => {
//         setCheckEmpty(false);
//       }, 2000);
//     } else {
//       if (securityKey !== secretKey) {
//         setCheckSecurityKey(false);

//         setTimeout(() => {
//           setCheckSecurityKey(true);
//         }, 2000);
//       } else {
//         setCheckSecurityKey(true);
//       }

//       securityKey === secretKey
//         ? history.replace("/quizscreen", {
//             data: modalData,
//           })
//         : setCheckSecurityKey(false);
//       // ? history.replace("/user/quiz")
//       // : history.replace("/user/quizzes");

//       //   localStorage.setItem("topic", oneTopic);
//     }
//   };

//   return (
//     <>
//       <div
//         className="container-scroller"
//         style={{ backgroundColor: "#f5f7ff", height: "100vh" }}
//       >
//         <Header />
//         {/* <Navbar /> */}
//         {/* partial */}
//         <div
//           className="container-fluid page-body-wrapper"
//           style={{ marginTop: 30 }}
//         >
//           {/* <Settings_Panel />
//           <RightSidebar /> */}

//           {/* partial */}
//           <div className="main-panel">
//             <div className="content-wrapper">
//               <div className="row d-flex justify-content-center">
//                 <div className="col-lg-8 grid-margin stretch-card">
//                   <div className="card" style={{ borderRadius: 20 }}>
//                     <div className="card-body">
//                       <h4 className="card-title text-center">All Quizzes</h4>
//                       <div className="table-responsive">
//                         <table className="table table-striped">
//                           <thead>
//                             <tr className="text-center">
//                               <th style={{ fontSize: 14 }}>Quiz</th>
//                               <th style={{ fontSize: 14 }}>Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {/* {data.map((val, index) => {
//                                 console.log(val);

//                                 return ( */}
//                             {data
//                               .filter((name) => {
//                                 return (
//                                   name.courseName
//                                     .toLowerCase()
//                                     .indexOf(
//                                       localStorage
//                                         .getItem("course")
//                                         .toLowerCase()
//                                     ) >= 0
//                                 );
//                               })
//                               .map((filteredName, i) => {
//                                 return filteredName.view ? (
//                                   <tr className="text-center" key={i}>
//                                     <td
//                                       className="py-3 text-capitalize"
//                                       style={{}}
//                                     >
//                                       {filteredName.topicName}
//                                     </td>
//                                     <td>
//                                       <button
//                                         className="btn btn-sm btn-primary"
//                                         style={{
//                                           backgroundColor: "#006864",
//                                           color: "white",
//                                           fontSize: 13,
//                                           borderColor: "#006864",
//                                         }}
//                                         onClick={() => {
//                                           setModalData(filteredName);
//                                           openModal();
//                                         }}
//                                       >
//                                         Attempt
//                                       </button>
//                                     </td>
//                                   </tr>
//                                 ) : null;
//                               })}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="d-flex justify-content-center mt-5">
//                 <Link to="/stdHome">Back to Home</Link>
//               </div>
//             </div>
//             {/* <Footer /> */}
//           </div>
//         </div>
//       </div>

//       {/* modal */}
//       <div className={`modal-bg ${customClassName ? "bg-active" : ""}`}>
//         <div className="modal minorStyle">
//           <div className="instruction">
//             <h3 className="text-center mb-3 ">Instructions</h3>
//             <ul>
//               <li className="text-center py-1">{modalData.topicName} Test</li>
//               <li className="text-center py-1">Passing Marks 60%</li>
//               <li className="text-center py-1">
//                 Duration: {modalData.duration} min
//               </li>
//               <li className="text-center py-1">
//                 {modalData.numOfQuestion} questions
//               </li>
//               <li className="text-center py-1">
//                 Mobile phones should be switched off before starting and during
//                 exam
//               </li>
//             </ul>
//           </div>
//           <form onSubmit={(e) => submitForm(e)}>
//             <input
//               type="password"
//               name="secretKey"
//               placeholder="Enter Secret Key"
//               value={securityKey}
//               onChange={(e) => handleChange(e)}
//             />
//             {checkSecurityKey === false ? (
//               <small className="text-white">Wrong Key</small>
//             ) : null}
//             {checkEmpty ? <p className="text-white">Key Not Be Empty</p> : null}
//             <button>Start Quiz</button>
//           </form>
//           <span className="modal-close" onClick={() => closeModal()}>
//             X
//           </span>
//         </div>
//       </div>
//       {/* end modal */}
//     </>
//   );
// };

// export default View;

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useHistory, Link } from "react-router-dom";
import { readUserAuth } from "../../Redux/action/userAuth";
import Header from "../../component/Header";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// import firebase from "./../../../config/firebase";
// import Navbar from "./../../../layouts/Navbar";
// import Settings_Panel from "./../../../layouts/Settings_Panel";
// import RightSidebar from "./../../../layouts/RightSidebar";
// import Footer from "./../../../layouts/Footer";
import "./attemptQuiz.css";
import axios from "axios";
const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo,loadings } = useSelector((state) => state.readUserAuthReducer);
  const [api, setApi] = useState("https://jawan-tech-backend.herokuapp.com/");
  const [data, setdata] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [secretKey, setSecretKey] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const [topics, setTopics] = useState([]);

  const [institute, setInstitute] = useState("");

  const [course, setCourse] = useState("");

  const [checkSecurityKey, setCheckSecurityKey] = useState(true);

  const [checkEmpty, setCheckEmpty] = useState(false);

  const [loading, setLoading] = useState(false);

  let oneTopic = null;

  const [securityKey, setSecurityKey] = useState("");

  const [security, setSecurity] = useState("");

  const [customClassName, setCustomClassName] = useState(false);
  const [stdData, setStdData] = useState({});
  // let [ modalDismiss,setModalDismiss] = useState(null)
  // console.log("first " + institute, "first " + course);

  //   useEffect(() => {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         fetchSecurityKey();
  //         /* fetchUserDetail();
  //         fetchQuizzes(); */

  //         var uid = user.uid;
  //         console.log(uid);
  //         var user = user.displayName;

  //         firebase
  //           .database()
  //           .ref(`AllUsers/User/${uid}/AllData/profile/otherDetails/institute`)
  //           .on("value", (datasnap) => {
  //             let insitute = datasnap.val();
  //             setInstitute(datasnap.val());
  //             console.log(datasnap.val());

  //             firebase
  //               .database()
  //               .ref(`AllUsers/User/${uid}/AllData/profile/otherDetails/course`)
  //               .on("value", (datasnap) => {
  //                 // console.log(datasnap.val())
  //                 let course = datasnap.val();
  //                 setCourse(datasnap.val());
  //                 console.log(datasnap.val());

  //                 firebase
  //                   .database()
  //                   .ref(`quizzes/${insitute}/${course}`)
  //                   .on("value", (datasnap) => {
  //                     let quizes = datasnap.val();
  //                     /* if (quizes.length === -1) {
  //                       setLoading(true);
  //                     } */

  //                     let enabled = [];
  //                     let keys = Object.keys(quizes);
  //                     let totalQuizes = keys.length;
  //                     for (var i = 0; i < totalQuizes; i++) {
  //                       if (quizes[keys[i]].visible === "On")
  //                         enabled.push(keys[i]);
  //                       if (i === totalQuizes - 1) setdata(enabled);
  //                       setLoading(false);
  //                       console.log(i, quizes);
  //                     }
  //                   });
  //               });
  //           });
  //       } else if (
  //         !localStorage.getItem("success") ||
  //         !sessionStorage.getItem("authorized")
  //       ) {
  //         firebase.auth().signOut();
  //         history.replace("/admin");
  //       } else {
  //         localStorage.removeItem("success");
  //         sessionStorage.removeItem("authorized");
  //         firebase.auth().signOut();
  //         history.replace("/admin");
  //       }
  //     });
  //   }, []);

  //   const fetchSecurityKey = async () => {
  //     try {
  //       const data = await firebase.database().ref("/security");

  //       data.once("value", (data) => {
  //         setSecurity(data.val().key);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const token = Cookies.get("Stdtoken");

  useEffect(() => {
    if(token){
      dispatch(readUserAuth(token));
    }
  }, []);

  // useEffect( () => {
  // if(loadings == false){

  //   console.log("dataa",userInfo.user && userInfo.user.course)
  // }else {
  // }
  // },[userInfo,loadings]);

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };

    axios
      .get(`${api}quiz/stdQuizGet`, {}, { headers })
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    axios
      .get(`${api}quiz/quizKeyGet`, {}, { headers })
      .then((res) => {
        setSecretKey(res.data.data[0].keyVal, "key");
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  // useEffect(()=>{

  // } , [modalDismiss])
  const handleChange = (e) => {
    setSecurityKey(e.target.value);
  };

  //   const submitForm = (e) => {
  //     e.preventDefault();

  //     if (securityKey === "") {
  //       setCheckEmpty(true);

  //       setTimeout(() => {
  //         setCheckEmpty(false);
  //       }, 2000);
  //     } else {
  //       if (securityKey !== security) {
  //         setCheckSecurityKey(false);

  //         setTimeout(() => {
  //           setCheckSecurityKey(true);
  //         }, 2000);
  //       } else {
  //         setCheckSecurityKey(true);
  //       }

  //       securityKey === security
  //         ? history.replace("/user/quiz")
  //         : history.replace("/user/quizzes");

  //       localStorage.setItem("topic", oneTopic);
  //     }
  //   };

  const openModal = () => {
    setCustomClassName(true);
  };

  const closeModal = () => {
    setCustomClassName(false);
  };

  console.log(secretKey);

  ////MODAL FUNCTION START//////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (filteredName) => {
    setModalData(filteredName);
    setShow(true);
  };
  ////MODAL FUNCTION END//////

  const submitForm = (e) => {
    // console.log(e.target);
    e.preventDefault();
    // console.log("sadsadsads");
    if (securityKey === "") {
      setCheckEmpty(true);

      setTimeout(() => {
        setCheckEmpty(false);
      }, 2000);
    } else {
      if (securityKey !== secretKey) {
        setCheckSecurityKey(false);

        setTimeout(() => {
          setCheckSecurityKey(true);
        }, 2000);
      } else {
        setCheckSecurityKey(true);
      }

      if (securityKey === secretKey) {
        history.replace("/quizscreen", {
          data: modalData, 
          userData : userInfo
        });
        handleClose();
      } else {
        setCheckSecurityKey(false);
      }
      // securityKey === secretKey
      //   ? history.replace("/quizscreen", {
      //     data: modalData,
      //   })
      //   : setCheckSecurityKey(false);

      // ? history.replace("/user/quiz")
      // : history.replace("/user/quizzes");

      //   localStorage.setItem("topic", oneTopic);
    }
  };

  return (
    <>
      <div
        className="container-scroller"
        style={{ backgroundColor: "#f5f7ff", height: "100vh" }}
      >
        <Header />
        {/* <Navbar /> */}
        {/* partial */}
        <div
          className="container-fluid page-body-wrapper"
          style={{ marginTop: 30 }}
        >
          {/* <Settings_Panel />
          <RightSidebar /> */}

          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 grid-margin stretch-card">
                  <div className="card" style={{ borderRadius: 20 }}>
                    <div className="card-body">
                      <h4 className="card-title text-center">All Quizzes</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr className="text-center">
                              <th style={{ fontSize: 14 }}>Quiz</th>
                              <th style={{ fontSize: 14 }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {data.map((val, index) => {
                                console.log(val);
                                
                                return ( */}
                            {data &&
                              data
                                .filter((name) => {
                                  return (
                                    name.courseName.toLowerCase().indexOf(
                                      userInfo && userInfo.user.course.toLowerCase()
                                      // localStorage
                                      //   .getItem("course")
                                      //   .toLowerCase()
                                    ) >= 0
                                  );
                                })
                                .map((filteredName, i) => {
                                  return filteredName.view ? (
                                    <tr className="text-center" key={i}>
                                      <td
                                        className="py-3 text-capitalize"
                                        style={{}}
                                      >
                                        {filteredName.topicName}
                                      </td>
                                      <td>
                                        <button
                                          // data-toggle="modal"
                                          // data-target="#quizAttempModal"
                                          className="attempBtns"
                                          // style={{
                                          //   backgroundColor: "#006864",
                                          //   color: "white",
                                          //   fontSize: 13,
                                          //   borderColor: "#006864",
                                          // }}
                                          onClick={() =>
                                            handleShow(filteredName)
                                          }
                                          // onClick={() => {
                                          //   setModalData(filteredName);
                                          //   // openModal();
                                          // }
                                          // }
                                        >
                                          Attempt
                                        </button>
                                      </td>
                                    </tr>
                                  ) : null;
                                })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <Link className="BackTObTn" to="/stdHome">
                  Back to Home
                </Link>
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} id="quizAttempModal">
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="m-0">Instructions</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="reactModalBody">
          <table>
            <tr>
              <td>
                <strong>NAME:</strong>{" "}
              </td>
              <td>{modalData.topicName} Test</td>
            </tr>
            <tr>
              <td>
                {" "}
                <strong>Passing Criteria:</strong>{" "}
              </td>
              <td>60%</td>
            </tr>

            <tr>
              <td>
                <strong>Duration:</strong>
              </td>
              <td>{modalData.duration} min</td>
            </tr>
            <tr>
              <td>
                <strong>Total Questions:</strong>
              </td>
              <td> {modalData.numOfQuestion}</td>
            </tr>
            <tr>
              <td>
                <strong>Secret Key:</strong>
              </td>
              <td>
                <div>
                  <form onSubmit={(e) => submitForm(e)}>
                    <input
                      type="password"
                      name="secretKey"
                      placeholder="Enter Secret Key"
                      value={securityKey}
                      onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <small className="text-danger">
                      {checkSecurityKey === false ? "Wrong Key" : ""}
                      {checkEmpty ? "Key Not Be Empty" : null}
                    </small>
                  </form>
                </div>
              </td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <small>
              <strong>
                Mobile phones should be switched off before starting and during
                exam
              </strong>
            </small>
          </div>
          <Button
            variant="primary"
            onClick={(e) => {
              submitForm(e);
            }}
          >
            START QUIZ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default View;
