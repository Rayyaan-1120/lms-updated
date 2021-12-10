import React, { useState, useEffect } from 'react'
import NewSideBar from "./StdnewSideBar";
import Header from "./Header";
import Modal from 'react-awesome-modal'
import styles from './StdAssignment.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getstddassignment, getsingleassignment,updatestudentassignment } from '../../Redux/action/assignment';

const StdAssignment = () => {
    const dispatch = useDispatch()
    const [assignmentLink,setassignmentLink] = useState('')
    const { userInfo } = useSelector((state) => state.readUserAuthReducer);
    const { message, loading, error, assignments, singleassignment } = useSelector(
        (state) => state.assignmentreducer
    );
    const { details,assignmentName,assignmentDate,deadline,_id:id } = singleassignment
    const { city, institute, batch, course, time,generatedId:rollNo } = userInfo.user

    useEffect(() => {
        dispatch(getstddassignment(city, institute, batch, course, time))
    }, [])



    const [visible, setvisible] = useState(false)
    if (visible) {
        document.body.style.overflow = "hidden"
    }
    if (!visible) {
        document.body.style.overflow = "auto"
    }

    const submitassignment = (e) => {
        e.preventDefault()
        dispatch(updatestudentassignment(id,rollNo,assignmentName,details,assignmentDate,time,deadline,assignmentLink))
        setvisible(false)

    }
    //localhost:5000/assignment/getallassigments

    
    //     localhost:5000/assignment/addassignment
    // Params
    // {
    // "city":"Karachi", "institute":"BMJ Digital Education",
    //      "batch":"03", "course":"Web and Mobile App Dev",
    //       "time":"Mon. & Thurs. 7pm to 10pm",
    //       "deadline":"2021-11-24T10:48:04.420+00:00",
    //       "details":"Assignment One","assignmentName":"Calculator"
    // }

    // localhost:5000/assignment/getstdasiign
    // {
    //     "city":"Karachi", "institute":"BMJ Digital Education",
    //      "batch":"03", "course":"Web and Mobile App Dev",
    //       "time":"Mon. & Thurs. 7pm to 10pm"
    // }

    // localhost:5000/assignment/stdupdateassi

    // {
    // id, rollNo, assignmentName, details,assignmentDate, time,deadline,assignmentLink
    // }



    return (
        <>
            {singleassignment && (
                <Modal
                    visible={visible}
                    width="800"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={() => {
                        setvisible(false)

                    }}

                >
                    <div className={styles.wrapper}>
                        <div className={styles.headingg}>
                            <h2>Assignment Details</h2>
                        </div>
                        <div className={styles.para}>
                            <p>{details}</p>
                        </div>
                        <div className="col-md-12 mt-3">
                            <p className="color title my-2">Assignent link</p>
                            <form onSubmit={submitassignment}>
                            <input
                                className="form-control"
                                required
                                onChange={(e) => {
                                    setassignmentLink(e.target.value)
                                }}
                            />
                            <button className={styles.btn} type="submit">
                                submit
                            </button>
                            </form>
                           
                        </div>
                        
                    </div>
                </Modal>
            )}

            <Header />
            <div className="mainDashBox">
                <div className="sideBOxhai">
                    <NewSideBar className="sideContainer" />
                </div>
                <div className="bannerBOxhai">
                    <div className={styles.headingdiv}>
                        <h2 className={styles.heading}>
                            Assignments
                        </h2>
                    </div>
                    <div className={styles.infowrapper}>
                        <div className={`${styles.infodiv} ${styles.green}`}>
                            <div className={styles.infoone}>
                                <h3 className={styles.white}>Assignment Name</h3>
                            </div>
                            <div className={styles.infotwo}>
                                <h3 className={styles.white}>Assignment deadline</h3>
                            </div>
                            <div className={styles.infothree}>

                            </div>
                        </div>
                        {loading && (
                <div className="spinner-border load" role="status">
                  <span className="visually-hidden"></span>
                </div>
              )}
                        {assignments != [] && assignments.map((e, i) => {
                            return <div className={styles.infodiv}>
                                <div className={styles.infoone}>
                                    <h3>{e.assignmentName}</h3>
                                </div>
                                <div className={styles.infotwo}>
                                    <h3>{e.deadline}</h3>
                                </div>
                                <div className={styles.infothree}>
                                    <button
                                        className="btn btn-secondary shadow ml-1"
                                        onClick={() => {
                                            dispatch(getsingleassignment(e._id))
                                            setvisible(true)
                                        }

                                        }
                                    >
                                        details
                                    </button>
                                </div>
                            </div>
                        })
                        }




                    </div>
                </div>

            </div>
        </>
    )
}

export default StdAssignment
