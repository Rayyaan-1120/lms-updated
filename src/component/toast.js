import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';

function Toasti({toaststate}) {

    // const { toaststate, toastmsg } = useSelector(state => state.attendancereducer)
    // console.log(toaststate)
    // console.log(toaststate)
    // eslint-disable-next-line no-unused-expressions
    // toaststate ? toast(toastmsg) : ''

    return (
        <div>
            {toaststate && (
                <ToastContainer />
            )}
        </div>
    )
}

export default Toasti
