import React from 'react'
import { useSelector } from 'react-redux'
import styles from './stddetails.module.css'

function Stddetails() {

    const { userInfo } = useSelector((state) => state.readUserAuthReducer);


    return (
        <>
            {userInfo && (
                <div className={styles.mainstddiv}>
                    <div className={styles.infodiv}>
                        <div className={styles.wit}>
                            <div>
                                <img src={userInfo?.user?.multiple_image[0]} alt="" />
                            </div>
                        </div>
                        <div className={styles.wit}>
                            <div>
                                <h2>{`${userInfo?.user?.fullName} ${userInfo?.user?.fatherName}`}</h2>
                            </div>
                            <div>
                                <h3>{userInfo?.user?.email}</h3>
                            </div>
                            <div>
                                <h3>Roll no: {userInfo?.user?.rollno}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Stddetails
