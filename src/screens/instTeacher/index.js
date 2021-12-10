import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import "./css/index.css";
import "react-toastify/dist/ReactToastify.css";

const InstTeacher = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(
    (state) => state.createUserReducer
  );



  // const redirect = location.search ? location.search.split("=")[1] : `/`;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/registration");
  //   }
  // }, [userInfo, history]);




//   const Logout = () => {
//     localStorage.clear("adminEmail");
//     localStorage.clear("adminType");
//     props.history.replace("/adminlogin");
//   };
//   useEffect(() => {

//   },[]);
  return (
    <>
      
          <div class="form">
            <div class="heading">
              <h2>Institute Teacher</h2>
            </div>

            <button
            style={{
              backgroundColor: "dodgerblue",
              border: "none",
              padding: 12,
              color: "white",
              borderRadius: 5,
            }}
            // onClick={Logout}
          >
            Logout
          </button>
      </div>
    </>
  );
};

export default InstTeacher;
