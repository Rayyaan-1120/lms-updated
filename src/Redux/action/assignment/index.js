import axios from 'axios'
import { toast } from 'react-toastify'





const api = "https://jawan-tech-backend.herokuapp.com/";

const addassignment = (city, institute, batch, course, time, deadline, details, assignmentName,totalMarks) => async (dispatch) => {

    dispatch({ type: "ADD_ASSIGNMENT" })

    const obj = {
        city,
        institute,
        batch,
        course,
        time,
        deadline,
        details,
        assignmentName,
        totalMarks

    }

    const options = {
        method: "POST",
        headers: { Accept: "application/json" },
        data: obj,
        url: `${api}assignment/addassignment`,
    };

    axios(options)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: "ADD_ASSIGNMENT_SUCCESS", payload: res.data.data });
            toast(res.data.message)
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: "ADD_ASSIGNMENT_ERROR",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });


}

const getstddassignment = (city, institute, batch, course, time) => async (dispatch) => {

    dispatch({ type: 'STD_GET_ASSIGNMENT' })

    const obj = {
        city,
        institute,
        batch,
        course,
        time
    }

    const options = {
        method: "POST",
        headers: { Accept: "application/json" },
        data: obj,
        url: `${api}assignment/getstdasiign`,
    };

    axios(options)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: "STD_GET_ASSIGNMENT_SUCCESS", payload: res.data.data });
            toast(res.data.message)
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: "STD_GET_ASSIGNMENT_ERROR",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });

}

const getsingleassignment = (id) => async (dispatch) => {

    dispatch({ type: 'GET_SINGLE_ASSIGNMENT', id })

}


const updatestudentassignment = (id,rollNo,assignmentName,details,assignmentDate,time,deadline,assignmentLink) => async (dispatch) => {
    dispatch({type:'UPDATE_STD_ASSIGNMENT'})

    const obj = {
        id,
        rollNo,
        assignmentName,
        details,
        assignmentDate,
        time,
        deadline,
        assignmentLink
    }

    const options = {
        method: "PUT",
        headers: { Accept: "application/json" },
        data: obj,
        url: `${api}assignment/stdupdateassi`,
    };

    axios(options)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: "UPDATE_STD_ASSIGNMENT_SUCCESS", payload: res.data.data });
            toast(res.data.message)
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: "UPDATE_STD_ASSIGNMENT_ERROR",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        });

}

export { addassignment, getstddassignment, getsingleassignment,updatestudentassignment }
