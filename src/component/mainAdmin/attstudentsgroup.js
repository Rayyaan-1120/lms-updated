import React from "react";
import styles from "./attstudentsgroup.module.css";
import { useSelector } from "react-redux";

function Attstudentsgroup() {

    const { attendance, singleatt } = useSelector(state => state.attendancereducer)
    console.log(singleatt)


    return (
        <div className={styles.maindiv}>
            <div className={styles.heading}>
                <h2>Students Info</h2>
            </div>
            {singleatt != [] ? singleatt.map((e, i) => {
                return (
                    <div className={styles.infodiv}>
                        <div className={styles.infoone}>
                            <h3 >{e.stdName}</h3>
                        </div>
                        <div className={styles.infotwo}>
                            <h3>{e.rollNo}</h3>
                        </div>
                        <div className={styles.infothree}>
                            <h3>{e.status}</h3>
                        </div>
                    </div>
                )

            }) : 'no students found'}

        </div>
    );
}

export default Attstudentsgroup;
