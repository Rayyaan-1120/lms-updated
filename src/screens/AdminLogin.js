// import React, { useEffect, useState } from "react";
// import Header from "../component/Header";
// import { ToastContainer, toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import "./css/index.css";
// import LandscapeLogo from "../images/landscape_logo.png";
// import LoginImage from "../images/login_image.png";
// import "react-toastify/dist/ReactToastify.css";
// import Loader from "../component/Loader";
// import Message from "../component/Message";
// import Cookies from "js-cookie";
// import { Redirect } from "react-router-dom";
// import {
//   adminAuth,
//   logout,
//   emptyMessage,
//   readAdminAuth,
// } from "../Redux/action/adminAuth";
// import jwt from "jsonwebtoken";

// const AdminLogin = ({ history }) => {
//   const [email, setEmail] = useState("jawantechpk@gmail.com");
//   const [password, setPassword] = useState("12345678");
//   const [errors, setErrors] = useState("");

//   const dispatch = useDispatch();
//   const { loading, error, message, userInfo } = useSelector(
//     (state) => state.adminLoginReducer
//   );
//   const { adminInfo } = useSelector((state) => state.readAdminAuthReducer);

//   // const histories = useHistory();
//   // console.log("err", errorss);
//   // console.log("load", loadings);

//   // useEffect(() => {
//   //   if (adminInfo) {
//   //     console.log("Sss", adminInfo);
//   //     console.log("load", loadings);
//   //     console.log("load", errorss);
//   //   } else {
//   //     console.log("error");
//   //     console.log("Sss", adminInfo);
//   //     console.log("load", loadings);
//   //   }
//   // }, [adminInfo]); // const redirect = location.search ? location.search.split("=")[1] : `/`;
//   // const token = Cookies.get("token");
//   const token = Cookies.get("token");
//   const id = Cookies.get("id");
//   // const tokenDetails = jwt.decode(token);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     //Dispatch Login
//     if (email === "") {
//       setErrors("Plz Type Your Email");
//       setTimeout(() => {
//         setErrors("");
//       }, 2000);
//     } else {
//       dispatch(adminAuth(email, password, history));
//       // setTimeout(() => {
//       //   history.push("/mainadmindashboard");

//       //   dispatch(emptyMessage());
//       // }, 2000);
//       // setEmail("");
//       // setPassword("");
//     }
//   };

//   // useEffect(() => {
//   //   console.log("useeffect");
//   //   if (tokenDetails) {
//   //     history.push("/mainadmindashboard");
//   //   }
//   // }, [message]);
//   // useEffect(async () => {
//   //   // console.log("id", id, token);
//   //   await dispatch(readAdminAuth(id, token));
//   // }, []);

//   useEffect(() => {
//     if (token && id) {
//       history.push("/mainadmindashboard");
//     }
//   }, [token, id]);

//   console.log("dddddd", adminInfo);

//   // useEffect(() => {
//   //   const adminInfo = localStorage.getItem("adminInfoId")
//   //     ? JSON.parse(localStorage.getItem("adminInfoId"))
//   //     : null;
//   //   if (adminInfo) {
//   //     history.push("/mainadmindashboard");

//   //     dispatch(emptyMessage());
//   //   }
//   // }, [adminInfo, history]);

//   // useEffect(() => {
//   //   const abc = localStorage.getItem("adminType");
//   //   if (abc == "mainAdmin") {
//   //     props.history.push("/createstd");
//   //   }
//   // });

//   return (
//     <>
//       {/* <Header /> */}
//       <div
//         class="container"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <nav>
//           <div class="image">
//             <img src={LandscapeLogo} alt="Logo" />
//           </div>
//         </nav> */}
//         <main>
//           <div class="image">
//             <img src={LoginImage} alt="Login" />
//           </div>
//           <div class="form">
//             <div class="heading">
//               <h2>Admin Login</h2>
//             </div>

//             <form onSubmit={submitHandler}>
//               <label>
//                 <div class="icon">
//                   <i class="fas fa-envelope"></i>
//                 </div>

//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   type="email"
//                   placeholder="Email Address"
//                 />
//               </label>
//               <label>
//                 <div class="icon">
//                   <i class="fas fa-lock"></i>
//                 </div>
//                 <input
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   placeholder="Password"
//                 />
//               </label>
//               {loading ? <Loader /> : <input type="submit" value="Sign in" />}
//               {/* {loading && <Loader />} */}
//             </form>
//           </div>
//           {error && <Message variant="danger">{error}</Message>}
//           {errors && <Message variant="danger">{errors}</Message>}

//           {message && <Message variant="success">{message}</Message>}
//           {/* {message == "login successfull" ? (
//             <Redirect to="/mainadmindashboard" />
//           ) : null} */}
//         </main>
//       </div>
//     </>
//   );
// };

// export default AdminLogin;

import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./css/index.css";
import LandscapeLogo from "../images/landscape_logo.png";
import LoginImage from "../images/login_image.png";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../component/Loader";
import Message from "../component/Message";
import { adminAuth, logout, emptyMessage } from "../Redux/action/adminAuth";
import Cookies from "js-cookie";

const AdminLogin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [imgClass, setImgClass] = useState("image");
  const dispatch = useDispatch();
  const { loading, error, userInfo, message } = useSelector(
    (state) => state.adminLoginReducer
  );

  const { adminInfo } = useSelector((state) => state.readAdminAuthReducer);
  // const redirect = location.search ? location.search.split("=")[1] : `/`;
  const submitHandler = (e) => {
    e.preventDefault();
    //Dispatch Login
    if (email === "") {
      setErrors("Plz Type Your Email");
      setTimeout(() => {
        setErrors("");
      }, 2000);
    } else {
      dispatch(adminAuth(email, password));
      // setEmail("");
      // setPassword("");
    }
  };

  // useEffect(() => {
  //   const abc = localStorage.getItem("adminType");
  //   if (abc == "mainadmin") {
  //     props.history.push("/createstd");
  //   }
  // }, [message]);

  const token = Cookies.get("token");
  const id = Cookies.get("id");
  // console.log("mm", userInfo && userInfo.user.token);
  useEffect(() => {
    if (token) {
      history.push("/mainadmindashboard");
    }
  }, [token]);

  console.log("dddddd", adminInfo);
  const animationImg = () => {
    setImgClass("image imageAnimation");
  };
  return (
    <>
      <Header />
      <div onLoad={animationImg} class="containerr">
        {/* <nav>
          <div class="image">
            <img src={LandscapeLogo} alt="Logo" />
          </div>
        </nav> */}
        <main className="mainBox">
          <div class={imgClass}>
            <img src={LoginImage} width="100%" alt="Login" />
          </div>
          <div class="form">
            <div class="heading">
              <h2>Admin Login</h2>
            </div>

            <form onSubmit={submitHandler}>
              <label>
                <div class="icon">
                  <i class="fas fa-envelope"></i>
                </div>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                />
              </label>
              <label>
                <div class="icon">
                  <i class="fas fa-lock"></i>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </label>
              {loading ? <Loader /> : <input type="submit" value="Sign in" />}
              {/* {loading && <Loader />} */}
            </form>
          </div>
          {error && <Message variant="danger">{error}</Message>}
          {errors && <Message variant="danger">{errors}</Message>}

          {message && <Message variant="success">{message}</Message>}
        </main>
      </div>
    </>
  );
};

export default AdminLogin;
