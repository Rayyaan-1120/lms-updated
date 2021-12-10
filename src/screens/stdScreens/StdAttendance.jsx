import React from "react";
import Header from "../Header";
import styles from "./StdAttendance.module.css";
import { useSelector } from 'react-redux'
import "./stdAttendance.css"
const StdAttendance = () => {

  

  


  return (
    <>
      {userInfo && (
        <>
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
                  <td>24/04/2021</td>
                </tr>
                <tr>
                  <td>Day</td>
                  <td>Monday</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>{userInfo.user.batch}</td>
                </tr>
                <tr>
                  <td>Timing</td>
                  <td>{userInfo.user.time.slice(0, 7)}</td>
                </tr>
                <tr>
                  <td>Attendance</td>
                  <td className={styles.checkMark}>
                    <input type="checkbox" />
                    Present
                  </td>
                </tr>

              </table>
            </div>
            <div className={styles.attendanceBoxFooter}>
              <button>Submit</button>
            </div>
          </section>
        </>
      )}

    </>
  );
};

export default StdAttendance;
