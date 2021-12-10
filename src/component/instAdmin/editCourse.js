import React,{useState,useEffect} from "react";
import bannerImg from "../../images/bannerf.jpeg";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdmin/SideBar";
import Banner from "../../component/mainAdmin/Banner";
import Banner1 from "../../component/mainAdmin/Banner1";
import './style.css'
import {useDispatch,useSelector} from 'react-redux'
import {getAllCourse,emptyMessage} from '../../Redux/action/courseAction/index'
import Modal from 'react-awesome-modal';
import Logos from '../../images/landscape_logo.png'
import axios from "axios";
import { FaPen, FaToggleOff, FaToggleOn, FaPlus } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";


const EditCourse = () => {

const {allCourseMessage,
    allCourseLoading,
    allCoursesData}=useSelector(
    (state)=>state.courseReducer
)

    const dispatch =useDispatch();
    const [courseSlot, setCourseSlot] = useState("");
    const [currentCourse, setCurrentCourse] = useState({});
    const [visible, setVisible] = useState(false);
    const [loading,setloading]=useState(false)


    useEffect(() => {
        dispatch(getAllCourse())
    }, [])

    const editCourseDetail=(e)=>{
setCurrentCourse(e);
setVisible(true);
    }

    const addCourseSlots =()=>{
        setCurrentCourse({...currentCourse,timings:[...currentCourse.timings,courseSlot]})
        setCourseSlot('')
    }

    const editCourseSlot=(ind)=>{
        var arr = currentCourse.timings;
        arr.splice(ind,1)
setCurrentCourse({...currentCourse,timings:arr})
        console.log(arr);
    }
const saveCourse=()=>{
    setloading(true)
        const options = {
            method: "PUT",
            headers: {
                Accept: "application/json",
            },
            data: currentCourse,
            url: "https://jawan-tech-backend.herokuapp.com/registration/updateCourseAnounce",
        };
        axios(options)
            .then((res) => {
                setloading(false)
                console.log(res)
                dispatch(getAllCourse())
                alert('Course Updated Successfully');
                setVisible(false);
                setCurrentCourse({})
            })
            .catch((err) => {
                setVisible(false);
                alert('Course Not Updated Successfully')
                setloading(false)
                setCurrentCourse({})
            });
    
}
const deleteCourse = (e) => {
    const obj = {
        _id: e._id
    };
    const options = {
        method: "DELETE",
        headers: {
            Accept: "application/json",
        },
        data: obj,
        url: "https://jawan-tech-backend.herokuapp.com/registration/deleteCourseAnounce",
    };
    axios(options)
        .then((res) => {
            dispatch(getAllCourse())
            alert('Course Deleted Successfully');
        })
        .catch((err) => {
            alert('Course Not Deleted Successfully')
        });
}
console.log(currentCourse,'currentCourse')
return (
    <div>
    <Header />
      <div className="banner-img1">
        <Banner1 />
      </div>
      <div className="sidebar-banner-container" style={{ display: "flex" }}>
        <SideBar />

        <div className="container-fluid mt-3">

       {
allCourseLoading ?
<div className="spinner-border load" role="status" style={{position:'absolute',top:'50%',left:'50%',width:60,height:60,color:'#06693B',fontSize:50}}>
<span className="visually-hidden"></span>
</div>
    :
       <div className="row">
                        {allCoursesData && allCoursesData.map((e, i) => {
                            return (

                                <div className="col-md-6 py-2">
                                    <div className="rounded border border-info shadow p-4">
                                        <h5 className="color text-decoration-underline">
                                            {e.courseName}{" "}
                                            <br />
                                            <span className="fs-5">Batch: {e.batchNo}</span>
                                        </h5>
                                        <p></p>
                                        <p>City: {e.cityName}</p>
                                        <h6 style={{ textAlign: 'left' }}>Duration: {e.duration}</h6>
                                        <div className="bg-light p-3 shadow rounded d-flex justify-content-between">
                                            <div>
                                                <h5 className="mt-3">
                                                    Status : {e.viewForm ? "Open" : 'Closed'}
                                                </h5>
                                            </div>
                                            <h4>
                                                <button
                                                    className="btn btn-info shadow"
                                                    onClick={() => editCourseDetail(e)}
                                                >
                                                    <FaPen />
                                                </button>
                                                <button
                                                    className="btn btn-danger shadow ml-1"
                                                    onClick={() => deleteCourse(e)}
                                                >
                                                    <GoTrashcan />
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
                    width="1200"
                    effect="fadeInUp"
                    onClickAway={() => setVisible(false)}
                    
                >
                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="color title my-2">Course Name</p>
                                <input
                                    value={
                                        currentCourse.courseName
                                    }
                                    className="form-control"
                                    onChange={(e) => {
                                        setCurrentCourse({ ...currentCourse, courseName: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">City Name</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.cityName
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, cityName: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Course Code</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.courseCode
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, courseCode: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">City Code</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.cityCode
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, cityCode: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Institute Name</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.instituteName
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, instituteName: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Institute Code</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.instituteCode
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, instituteCode: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-10 py-3 mr-3 row">
            <div className="col-md-6">

          <p className="color title">Course Slots</p>
          <input type="text" 
          value={courseSlot}
        className="inp" placeholder="Enter Course Slots"
        style={{height:40}}
           onChange={(e) => { setCourseSlot(e.target.value) }} 
        />
              </div>
              <div className="col-md-2">
              <button className="btn btn-success" 
              onClick={()=>{addCourseSlots()}}
               style={{width:80,height:40,marginTop:45}}>Add</button>
              </div>
          {/* {state.chkCourseSlot ? (
              <p className="text-danger">Enter Course Slot</p>
              ) : null} */}
        </div>
        <div className="col-md-10">
            <p className="color title">Course Slot List</p>
        <div className="row ">
{
    currentCourse.timings && currentCourse.timings.map((val,ind)=>{
        return <span key={ind} className='row' style={{marginLeft:20}}><li className="mr-2 mt-3">{ind+1}) {val}</li><i onClick={()=>{editCourseSlot(ind) }} 
        className="fa fa-times mr-4 mt-4 " style={{color:'red',fontSize:10}} aria-hidden="true"></i></span>
    })
}
        </div>
        </div>
                            <div className="col-md-6 mt-3">
                                <p className="color title my-2">Course Duration</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.duration
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, duration: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <p className="color title my-2">Batch Name</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.batchNo
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, batchNo: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <p className="color title my-2">Course Year</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.year
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, year: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <p className="color title my-2">Course Admission Last Date </p>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={
                                        currentCourse.admissionLastDate
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, admissionLastDate: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <p className="color title my-2">Course Status</p>
                                <div className="col-md-6">
                                    {currentCourse.viewForm ? (
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {

                                                setCurrentCourse({ ...currentCourse, viewForm: false });
                                            }}
                                            buttonValue="Close Registration"
                                        >
                                            Open
                                        </button>
                                    ) : (
                                            <button
                                                className="btn btn-danger"

                                                onClick={() => {
                                                    setCurrentCourse({ ...currentCourse, viewForm: true });
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
                                {loading? 
                        <div className="spinner-border load" role="status" style={{width:20,height:20,color:'#06693B',fontSize:20}}>
<span className="visually-hidden"></span>
</div>
                        :   <button value="Save" className="btn btn-success" 
                            onClick={() => saveCourse()} 
                            >
                                Update
                                </button>}
                        </div>
                    </div>
                </Modal>
            

</div>
        </div>
        </div>
  );
};

export default EditCourse;
