import axios from 'axios'
import { toast } from 'react-toastify'

// http://localhost:3000/attendance/stdupdateatt 
// params
// id, rollNo, className, date, time

//"KBJWM352"
//03492014236basit@gmail.com

const api = "https://jawan-tech-backend.herokuapp.com/";

const addattendancedata = (city, course, batch, institute, time, className) => async (dispatch) => {

  dispatch({ type: "ADD_ATTENDANCE" })

  const obj = {
    city,
    institute,
    course,
    batch,
    className,
    time,
  };

  const options = {
    method: "POST",
    headers: { Accept: "application/json" },
    data: obj,
    url: `${api}attendance/addAttendance`,
  };

  axios(options)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "ADD_ATTENDANCE_SUCCESS", payload: res.data });
      toast('attendance has been added successfully')
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "ADD_ATTENDANCE_ERROR",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });

}

const emptyMessage = () => {
  return (dispatch) => {
    dispatch({ type: "EMPTY_MESSAGE" });
  };
};



const getallattendance = () => async (dispatch) => {
  dispatch({ type: "GET_ATTENDANCE" });
  axios
    .get(`${api}attendance/getallAttendance`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_ATTENDANCE_SUCCESS", payload: res.data.data });
      // setCourseList(res.data.data);
    })
    .catch((err) => {
      console.log(err, "err");
      dispatch({ type: "GET_ATTENDANCE_ERROR", payload: "Please check your network connection" });
    });
};

const deleteattendance = (e) => async (dispatch) => {


  dispatch({ type: "DELETE_ATTENDANCE" })
  console.log(e)

  const obj = {
    _id: e._id
  }
  console.log(obj)

  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
    data: obj,
    url: `${api}attendance/deleteAttendance`,
  }

  axios(options)
    .then((res) => {
      dispatch(getallattendance())
      toast('attendance Deleted Successfully');
    })
    .catch((err) => {
      dispatch({ type: 'DELETE_ATTENDANCE_ERROR', payload: alert('failed to delete attendance') })

    });



}

const closeattendance = (_id, date, city, institute, course, batch, time, className, status, arrOfStudent) => async (dispatch) => {

  dispatch({ type: 'CLOSE_ATTENDANCE' })

  let ob = {
    id: _id,
    date,
    city,
    institute,
    course,
    batch,
    time,
    className,
    status,
    arrOfStudent,
  }
  console.log(ob)
  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    data: ob,
    url: "https://jawan-tech-backend.herokuapp.com/attendance/closeatt",
  };
  axios(options)
    .then((res) => {
      dispatch({ type: 'CLOSE_ATTENDANCE_SUCCESS', toastmsg: 'attendance has been closed' })
      console.log(res)
      toast('attendance closed successfully')
      dispatch(getallattendance())
      // toast('attendance has been closed')
      // return (
      //   <ToastContainer />
      // )
      // setVisible(false);
      // setCurrentCourse({})
    })
    .catch((err) => {
      // setVisible(false);
      dispatch({ type: 'CLOSE_ATTENDANCE_ERROR' })
      alert('Course Not Updated Successfully')
      // setloading(false)
      // setCurrentCourse({})
    });

}

const openattendanceagain = (_id) => async (dispatch) => {

  dispatch({ type: 'OPEN_ATTENDANCE' })

  const obj = {
    id: _id
  }

  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    data: obj,
    url: "https://jawan-tech-backend.herokuapp.com/attendance/attopen",
  };

  axios(options)
    .then((res) => {
      dispatch({ type: 'OPEN_ATTENDANCE_AGAIN' })
      console.log(res)
      toast('attendance opened again successfully')
      dispatch(getallattendance())
    })
    .catch((err) => {
      // setVisible(false);
      dispatch({ type: 'OPEN_ATTENDANCE_ERROR' })
      alert('Opening attendance failed')
    });


}

const updatestudenattendance = (id, rollNo, className, date, time) => async (dispatch) => {
  dispatch({ type: 'UPDATE_ATTENDANCE' })

  const obj = {
    id,
    rollNo,
    className,
    date,
    time
  }

  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    data: obj,
    url: "https://jawan-tech-backend.herokuapp.com/attendance/stdupdateatt",
  };

  axios(options)
    .then((res) => {
      dispatch({ type: 'UPDATE_ATTENDANCE_SUCCESS', rollNo, id })
      console.log(res)
      alert('Your attendance has been marked');
    })
    .catch((err) => {
      // setVisible(false);
      dispatch({ type: 'UPDATE_ATTENDANCE_ERROR' })
      console.log(err)
    });

}

const Singleattendance = (id) => async (dispatch) => {
  dispatch({ type: 'SINGLE_ATTENDANCE', id })
}

export { emptyMessage, addattendancedata, getallattendance, updatestudenattendance, deleteattendance, closeattendance, openattendanceagain, Singleattendance }
