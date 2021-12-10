import React, { useEffect, useState } from "react";
import Header from "../Header";
import styles from "./StdAttendance.module.css";
import "./stdAttendance.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getallattendance,
  updatestudenattendance,
} from "../../Redux/action/attendance";
import Attendanceloader from "../attendanceloader";
import Attendancemarked from "../attendancemarked";

const StdAttendance = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.readUserAuthReducer);
  const { attendance, error, attendanceloader } = useSelector((state) => state.attendancereducer);
  useEffect(() => {
    dispatch(getallattendance());
  }, []);

  const studentfilter = attendance
    .filter((e, i) => {
      return (
        e.course === userInfo.user.course &&
        e.batch === userInfo.user.batch &&
        e.institute === userInfo.user.institute &&
        e.time === userInfo.user.time
      );
    })
  const studentfiltermap = studentfilter.map((e, i) => {
    return e.arrOfStudent.filter((e, i) => {
      return e.stdName === userInfo.user.fullName;
    });
  })[0];

  // console.log(studentfilter);
  // console.log(studentfiltermap[0]);
  // console.log("jskjcsjckd", userInfo.user);



  return (
    <>
      {userInfo && (
        <>
          {attendanceloader && <Attendanceloader />}
          {/* {attendancemarked && <Attendancemarked />} */}
          <Header />
          <div className={styles.courseHeading}>
            <h4>{userInfo.user.course}</h4>
          </div>

          <section className={styles.attendanceBox}>
            <div className={styles.attendanceBoxHeader}>
              <h4>Attendance</h4>
            </div>
            <div className={styles.attendanceBoxBody}>
              <h4>Mark Your Attendance here</h4>
              <table className={styles.mytable}>
                <tr>
                  <td>Date</td>
                  <td>{userInfo.user.date.slice(4, 15)}</td>
                </tr>
                <tr>
                  <td>Day</td>
                  <td>{`${userInfo.user.date.slice(0, 3)}day`}</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>{userInfo.user.batch}</td>
                </tr>
                <tr>
                  <td>Timing</td>
                  <td>{userInfo.user.time.slice(7)}</td>
                </tr>
                <tr>
                  <td>Attendance</td>
                  <td className={styles.checkMark}>
                    {studentfiltermap && studentfiltermap[0].status === "absent" ? (
                      <input
                        type="checkbox"
                        required
                      // onChange={(e) => dispatch(updatestudenattendance(studentfilter[0]._id,studentfiltermap[0].rollNo,studentfilter[0].className,studentfilter[0].date,studentfilter[0].time)) }
                      />

                    ) : (
                      " "
                    )}
                    {studentfiltermap && studentfiltermap[0].status === "absent" ? "absent" : 'present'}
                  </td>
                </tr>
              </table>
            </div>
            <div className={styles.attendanceBoxFooter}>
              {studentfiltermap && studentfiltermap[0].status === "absent" ? (
                <button onClick={() => dispatch(updatestudenattendance(studentfilter[0]._id, studentfiltermap[0].rollNo, studentfilter[0].className, studentfilter[0].date, studentfilter[0].time))}>Submit</button>
              ) : <h2>attendance marked</h2>}

            </div>
          </section>
        </>
      )}
    </>
  );
};

export default StdAttendance;
