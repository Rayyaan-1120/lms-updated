import React, { useEffect, useState } from "react";
import {
  getadminallassignments,
  getsinglestdassignment,
  filterassignments,
  emptyassignment
} from "../../Redux/action/adminassignment";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import NewSidebar from "../mainAdminComponents/newSideBar";
import styles from "./allassignments.module.css";
import { FaEye } from "react-icons/fa";
import Modal from "react-awesome-modal";
import Stdassignmentsstatus from "./stdassignmentsstatus";
import AppDropDown from "../../component/regStdData/dropDown";
import Toasti from "../toast";


// localhost:5000/assignment/stdmarkass

// {
//     "id":"61a46a2da9e5d700238050cd", "rollNo":"KBJWM352", 
//     "obtainMarks":"8","assignmentName":"quiz app"
// }

export default function Allassignments() {
  const [states, setStates] = useState({
    city: "",
    institute: "",
    course: "",
    batch: "",
    time: "",
  });

  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const { error, loading, adminassignment, adminsingleassignment,filteredassignment,toaststate } =
    useSelector((state) => state.assignmentreducer);

  const openmodal = (id) => {
    dispatch(getsinglestdassignment(id));
    setvisible(true);
  };

  const filterate = () => {
    dispatch(
      filterassignments(
        states.city,
        states.institute,
        states.course,
        states.batch,
        states.time
      )
    );
  };

  console.log(adminassignment);

  const { arrOfStudent, course, batch,assignmentName,totalMarks,_id } = adminsingleassignment;

  useEffect(() => {
    dispatch(getadminallassignments());
  }, []);

  console.log(states);

  return (
    <>
    <Toasti toaststate={toaststate}/>
      <Modal
        visible={visible}
        width="850"
        height="600"
        effect="fadeInUp"
        onClickAway={() => {
          setvisible(false);
        }}
      >
        {arrOfStudent && (
          <Stdassignmentsstatus
            data={arrOfStudent}
            course={course}
            batch={batch}
            assignmentName={assignmentName}
            maxmarks={totalMarks}
            id={_id}
          />
        )}
      </Modal>
      <Header />
      <div className="mainDashBox">
        <div className="sideBOxhai">
          <NewSidebar className="sideContainer" />
        </div>
        <div className="bannerBOxhai">
          <div className={styles.maindiv}>
            <div className={styles.header}>
             
              <div>
                <AppDropDown
                  labelName="City"
                  // propsArr={["Select City", "Karachi", "Hyderabad"]}
                  // propsArr={
                  //   regCityGets.length != 0
                  //     ? regCityGets.map((a) => a.cityName)
                  //     : []
                  // }
                  propsArr={
                    adminassignment.length != 0
                      ? Array.from(
                          new Set(
                            adminassignment.map((a) => {
                              return a.city;
                            })
                          )
                        )
                      : []
                  }
                  onChange={(e) => {
                    setStates({
                      ...states,
                      city: e.target.value,
                      // checkCity: false,
                      institute: e.target.value == "" ? "" : states.institute,
                    });
                    // console.log(e.target.value);
                  }}
                />
                {/* {states.checkCity ? (
              <p className="text-danger">Select City</p>
            ) : null} */}
              </div>
              <div>
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
                  propsArr={Array.from(
                    new Set(
                      adminassignment
                        .filter((name) => {
                          return (
                            name.city
                              .toLowerCase()
                              .indexOf(states.city.toLowerCase()) >= 0
                          );
                        })
                        .map((filteredName, i) => {
                          return states.city ? filteredName.institute : null;
                        })
                    )
                  )}
                  onChange={(e) => {
                    setStates({
                      ...states,
                      institute: e.target.value,
                      // checkInstitute: false,
                      course: e.target.value == "" ? "" : states.course,
                    });
                    // console.log(e.target.value);
                  }}
                />
                {/* {states.checkInstitute ? (
                <p className="text-danger">Select Institute</p>
              ) : null} */}
              </div>
              <div>
                <AppDropDown
                  labelName="Course"
                  propsArr={Array.from(
                    new Set(
                      adminassignment
                        .filter((name) => {
                          return (
                            name.institute
                              .toLowerCase()
                              .indexOf(states.institute.toLowerCase()) >= 0
                          );
                        })
                        .map((filteredName, i) => {
                          return states.institute ? filteredName.course : null;
                        })
                    )
                  )}
                  onChange={(e) => {
                    setStates({
                      ...states,
                      course: e.target.value,
                      // checkCourse: false,
                    });

                    // console.log(e.target.value);
                  }}
                />
                {/* {states.checkCourse ? (
                <p className="text-danger">Select Course</p>
              ) : null} */}
              </div>
              <div>
                <AppDropDown
                  labelName="Batch"
                  propsArr={Array.from(
                    new Set(
                      adminassignment
                        .filter((name) => {
                          return (
                            name.course
                              .toLowerCase()
                              .indexOf(states.course.toLowerCase()) >= 0
                          );
                        })
                        .map((filteredName, i) => {
                          return states.course ? filteredName.batch : null;
                        })
                    )
                  )}
                  onChange={(e) => {
                    setStates({
                      ...states,
                      batch: e.target.value,
                      // checkBatch: false,
                    });
                  }}
                />
                {/* {states.checkBatch ? (
                <p className="text-danger">Select Batch</p>
              ) : null} */}
              </div>
              <div>
                <AppDropDown
                  labelName="Time"
                  propsArr={Array.from(
                    new Set(
                      adminassignment
                        .filter((name) => {
                          return (
                            name.batch
                              .toLowerCase()
                              .indexOf(states.batch.toLowerCase()) >= 0
                          );
                        })
                        .map((filteredName, i) => {
                          return states.batch ? filteredName.time : null;
                        })
                    )
                  )}
                  onChange={(e) => {
                    setStates({
                      ...states,
                      time: e.target.value,
                      // checkBatch: false,
                    });
                  }}
                />
              </div>
              <div className={styles.btndiv}>
                <button onClick={filterate}>Check</button>
                <button onClick={() => dispatch(emptyassignment())}>Reset</button>
              </div>
            </div>
            <div className={styles.infodiv}>
             
              <div className={styles.greendiv}>
                <h6>assignment name</h6>
                <h6>assignment date</h6>
                <h6>assignment deadline</h6>
              </div>
              {loading && (
                <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',height:'80vh'}}>
                <div className="spinner-border" role="status">
                  {/* <span className="visually-hidden"></span> */}
                </div>
                </div>

              )}
              {!loading && filteredassignment.length === 0 ? adminassignment.map((e, i) => {
                      console.log(e);
                      return (
                        <div className={styles.whitediv}>
                          <div>
                            <h6>{e.assignmentName}</h6>
                          </div>
                          <div>
                            <h6>{e.assignmentDate.slice(0, 16)}</h6>
                          </div>
                          <div>
                            <h6>{e.deadline.slice(0, 12)}</h6>
                          </div>
                          <div>
                            <FaEye onClick={() => openmodal(e._id)} />
                          </div>
                        </div>
                      );
                    }) : filteredassignment.map((e, i) => {
                      console.log(e);
                      return (
                        <div className={styles.whitediv}>
                          <div>
                            <h6>{e.assignmentName}</h6>
                          </div>
                          <div>
                            <h6>{e.assignmentDate.slice(0, 16)}</h6>
                          </div>
                          <div>
                            <h6>{e.deadline.slice(0, 12)}</h6>
                          </div>
                          <div>
                            <FaEye onClick={() => openmodal(e._id)} />
                          </div>
                        </div>
                      );
                    })}
              {/* {
                (adminassignment &&
                  (states.city === "" || states.city === "Select Option") &&
                  (states.course === "" || states.course === "Select Option") &&
                  (states.institute === "" ||
                    states.institute === "Select Option") &&
                  (states.batch === "" || states.batch === "Select Option") &&
                  (states.time === "" || states.time === "Select Option") &&
                    )

                // (states.city === ""
                //       ? adminassignment.map((e, i) => {
                //         console.log(e)
                //           return (
                //             <div className={styles.whitediv}>
                //               <div>
                //                 <h6>{e.assignmentName}</h6>
                //               </div>
                //               <div>
                //                 <h6>{e.assignmentDate.slice(0, 16)}</h6>
                //               </div>
                //               <div>
                //                 <h6>{e.deadline.slice(0, 12)}</h6>
                //               </div>
                //               <div>
                //                 <FaEye onClick={() => openmodal(e._id)} />
                //               </div>
                //             </div>
                //           );
                //         })
                //       : adminassignment.filter(
                //           (entry) =>
                //             entry.city === states.city &&
                //             entry.institute === states.institute &&
                //             entry.course === states.course &&
                //             entry.batch === states.batch &&
                //             entry.time === states.time
                //         )).map((k) => {
                //           return <div className={styles.whitediv}>
                //           <div>
                //             <h6>{k?.assignmentName}</h6>
                //           </div>
                //           <div>
                //             <h6>{k?.assignmentDate?.slice(0,16)}</h6>
                //           </div>
                //           <div>
                //             <h6>{k?.deadline}</h6>
                //           </div>
                //           <div>
                //             <FaEye onClick={() => openmodal(k?._id)} />
                //           </div>
                //         </div>
                //         } )
              }

              {adminassignment && (
                (states.city !== '' || states.city !== 'Select Option') && (
                  adminassignment.filter(
                              (entry) =>
                                entry.city === states.city &&
                                entry.institute === states.institute &&
                                entry.course === states.course &&
                                entry.batch === states.batch &&
                                entry.time === states.time
                            )).map((k) => {
                              return <div className={styles.whitediv}>
                              <div>
                                <h6>{k?.assignmentName}</h6>
                              </div>
                              <div>
                                <h6>{k?.assignmentDate?.slice(0,16)}</h6>
                              </div>
                              <div>
                                <h6>{k?.deadline?.slice(0,12)}</h6>
                              </div>
                              <div>
                                <FaEye onClick={() => openmodal(k?._id)} />
                              </div>
                            </div>
                            } )
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
