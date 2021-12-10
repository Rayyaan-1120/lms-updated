import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/bannerf.jpeg";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdmin/SideBar";
import Banner from "../../component/mainAdmin/Banner";
import Banner1 from "../../component/mainAdmin/Banner1";
import './style.css'
import {useDispatch,useSelector} from 'react-redux'
import {addNewCourseData,emptyMessage} from '../../Redux/action/courseAction/index'
import Modal from 'react-awesome-modal';
import Logos from '../../images/landscape_logo.png'
import {
    courseAnnouceGet,
  } from "../../Redux/action/stdRegistration";
  import AppDropDown from "../dropDown";
const AddAttenndance = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(courseAnnouceGet());

    }, []);
    const { courseAnnouceGets } = useSelector((state) => state.registerReducer);
    const openModal=()=> {
        setModalVisible(true)
     }
     
     const closeModal=()=> {
     setModalVisible(false)
     }
     const [modalVisible,setModalVisible]=useState(false)
     const [state, setState] = useState({
        city:"Karachi",
        course:"",
        institute:"BMJ Digital Education",

batch:'',
lastDate:'',
courseDura:'',
courseStatus:'',
courseId:'',
instituteCode:'',
courseSlot:'',
courseSlots:[],
year:'',
cityCode:'',
chkCity:false,
chkInstitute:false,
chkCourse:false,
chkBatch:false,
chkLastDate:false,
chkCourseStatus:false,
chkCourseDura:false,
chkCourseSlot:false,
coursesArr:[]
    });
     const setData = (a,b,c) => { setState({...state,[b]:a,[c]:false })}

     useEffect(()=>{
setState({...state,coursesArr:courseAnnouceGets
    .filter((name) => {
      return (
        name.instituteName
          .toLowerCase()
          .indexOf(state.institute.toLowerCase()) >= 0 
      );
    })
    .map((filteredName, i) => {
        return  filteredName.courseName

    })})
     },[state.institute])
console.log(state,'state',)
    return (
        <div>
        <Header />
          <div className="banner-img1">
            <Banner1 />
          </div>
          <div className="sidebar-banner-container" style={{ display: "flex" }}>
            <SideBar />
    
    
    
    <div className="container-fluid">
    
    <Modal visible={modalVisible} width="400" height="200" effect="fadeInUp" onClickAway={() => closeModal()}>
                        <div className='p-2'>
                            <div className='row mt-1'>
                                <img src={Logos} style={{width:200,height:50,marginLeft:100}}/>
                                </div>
                            <p className='font-weight-bold mt-5' > Note: </p>
                            <a  className="btn btn-danger" style={{position:'absolute',right:10,bottom:10}} href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
                        </div>
                    </Modal>
    
          <div className="row justify-content-center">
            <div className="col-md-8 p-5 text-white text-center">
              <h1 className="color title fs-2">Open New Course Admissions</h1>
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select City</p>
              <select className="inp " 
              onChange={(e) => {setData(e.target.value,'city','chkCity'); 
        }} 
              >
                  <option key='select' value="">Select Option</option>
                {Array.from(
                    new Set(courseAnnouceGets.map((e)=>{return e.cityName}))).map((e, i) => {
                      
              return <option key={i} value={e}>{e}</option>;
            })}
              </select>
              {state.chkCity ? (
                <p className="text-danger">Select City</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select Institute</p>
              <select className="inp" 
       onChange={(e) => {setData(e.target.value,'institute','chkInstitute'); 
           }} 
                 value={state.institute}
              >
                  <option key='select' value="">Select Option</option>
                  {Array.from(
                    new Set(courseAnnouceGets.map((e,i)=>{return e.instituteName})))
              .map((filteredName, i) => {
            //    console.log(filteredName,'filtename')
                return <option key={i} value={filteredName}>{filteredName}</option>;
              })
              }
              </select>
              {state.chkInstitute ? (
                <p className="text-danger">Select Institute</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Select Course</p>
              <select className="inp" 
            onChange={(e) => {setData(e.target.value,'course','chkCourse'); 
        }} 
              >
                  <option key='select' value="">Select Option</option>
                      {
                         Array.from(
                            new Set(state.coursesArr.map((e)=>{return e}))).map((e,i)=>{
                                return <option key={i} value={e}>{e}</option>;
                            })
                      }
              </select>
              {state.chkCourse?(
                <p className="text-danger">Select Course</p>
              ) : null}
            </div>
            <div className="col-md-5 py-3">
              <p className="color title">Enter Batch Number</p>
              <input
                type="number"
                // value={batch}
                className="inp"
                placeholder="Enter Batch Number 01"
                // onChange={(e) => { setState({...state,batch:e.target.value,chkBatch:false});  }}
              />
              {/* {state.chkBatch ? (
                <p className="text-danger">Enter Batch No Like 01</p>
              ) : null} */}
            </div>
    
    
    
            <div className="col-md-5 py-3 mr-1">
              <p className="color title">Last Date of Admission</p>
              <input type="date" 
            //   value={lastDate}
               className="inp" placeholder="Enter Batch Number"
            //    onChange={(e) => { setState({...state,lastDate:e.target.value ,chkLastDate:false}) }} 
               />
              {/* {state.chkLastDate ? (
                <p className="text-danger">Enter Date</p>
              ) : null} */}
            </div>
            {/* <div className="col-md-5 py-3 mr-3 row">
                <div className="col-md-10">
    
              <p className="color title">Course Slots</p>
              <input type="text" 
              value={state.courseSlot}
            className="inp" placeholder="Enter Course Slots"
            //    onChange={(e) => { setState({...state,courseSlot:e.target.value ,chkCourseSlot:false}) }} 
            />
                  </div>
                  <div className="col-md-2">
                  <button className="btn btn-success" onClick={()=>{addCourseSlots()}} style={{width:80,height:48,marginTop:45}}>Add</button>
                  </div>
              {state.chkCourseSlot ? (
                  <p className="text-danger">Enter Course Slot</p>
                  ) : null}
            </div>
            <div className="col-md-10">
                <p className="color title">Course Slot List</p>
            <div className="row ">
    {
        state.courseSlots.map((val,ind)=>{
            return <span key={ind} className='row' style={{marginRight:10}}><li className="mr-2 mt-3">{ind+1}) {val}</li><i onClick={()=>{ 
                setState({...state,courseSlots:state.courseSlots.slice(state.courseSlots.indexOf(val, 1))})
            }} className="fa fa-times mr-4 mt-4 " style={{color:'red',fontSize:10}} aria-hidden="true"></i></span>
        })
    }
            </div>
            </div> */}
            <div className="col-md-12 py-3">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <p className="color title">Course Duration</p>
                  <select className="inp"
                //    onChange={(e) => { setState({...state,courseDura:e.target.value ,chkCourseDura:false}) }} 
                   >
                    <option value="">Select Month</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  {/* {state.chkCourseDura ? (
                    <p className="text-danger">Select Duration</p>
                  ) : null} */}
                </div>
                <div className="col-md-5">
                  <p className="color title"> Course Status</p>
                  <select className="inp" 
                //   onChange={(e) => { setState({...state,courseStatus:e.target.value ,chkCourseStatus:false}) }} 
                  >
                    <option value="">Select Status</option>
                    <option value={true}>Open</option>
                    <option value={false}>Closed</option>
                  </select>
                  {/* {state.chkCourseStatus ? (
                    <p className="text-danger">Select Course Status</p>
                  ) : null} */}
                </div>
              </div>
            </div>
            <div className="d-flex" >
    {/* {
        !loading? */}
    
              <button className="prevbtn" 
              style={{ width: 150, height: 40, marginTop: 20 }} 
              onClick={() => { }} 
              >add Course</button>
    {/* :
    <div className="spinner-border load" role="status" style={{}}>
    <span className="visually-hidden"></span>
    </div>
            } */}
              </div>
          </div>
        </div>
    
    
    
    
    
    
    
            </div>
        </div>
    )

}


export default AddAttenndance;