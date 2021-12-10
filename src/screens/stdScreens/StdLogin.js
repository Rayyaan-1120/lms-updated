// import React, { useEffect, useState } from "react";
// import Header from "../../component/Header";
// import { ToastContainer, toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import "../css/index.css";
// import LoginImage from "../../images/login_image.png";
// import "react-toastify/dist/ReactToastify.css";
// import Loader from "../../component/Loader";
// import Message from "../../component/Message";
// import { loginAuth, logout } from "../../Redux/action/stdAuth";
// const StdLogin = (props) => {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState("");

//   const [toStd, setToStd] = useState();
//   const dispatch = useDispatch();
//   const { loading, error, userInfo, message } = useSelector(
//     (state) => state.userLoginReducer
//   );


//   const submitHandler = (e) => {
//     e.preventDefault();
//     //Dispatch Login
//     if (email === "") {
//       setErrors("Plz Type Your Email");
//       setTimeout(() => {
//         setErrors("");
//       }, 2000);
//     } else {
//       dispatch(loginAuth(email, password));
//       setEmail("");
//       setPassword("");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="container-fluid"
//         style={{
//           backgroundColor: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ display: "block" }}>
//           <main>
//             <div className="image">
//               <img src={LoginImage} alt="Login" />
//             </div>
//             <div className="form">
//               <div className="heading">
//                 <h2>User Sign in</h2>
//               </div>

//               <form onSubmit={submitHandler}>
//                 <label>
//                   <div className="icon">
//                     <i className="fas fa-envelope"></i>
//                   </div>

//                   <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     placeholder="Email Address"
//                   />
//                 </label>
//                 <label>
//                   <div className="icon">
//                     <i className="fas fa-lock"></i>
//                   </div>
//                   <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     placeholder="Password"
//                   />
//                 </label>
//                 {loading ? <Loader /> : <input type="submit" value="Sign in" />}
//               </form>
//             </div>
//             {error && <Message variant="danger">{error}</Message>}
//             {errors && <Message variant="danger">{errors}</Message>}
//             {message == "login successfull" &&
//               props.history.replace("/stdHome")}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StdLogin;





import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import { loginAuth } from "../../Redux/action/stdAuth"; 
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/index.css";
import LandscapeLogo from "../../images/landscape_logo.png";
import LoginImage from "../../images/login_image.png";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../component/Loader";
import Message from "../../component/Message";
import { adminAuth, logout, emptyMessage } from "../../Redux/action/adminAuth";
import Cookies from "js-cookie";

const StdLogin = ({ history }) => {
  const [email, setEmail] = useState("usama@gmail.com");
  const [password, setPassword] = useState("1oNEIfmC");
  const [errors, setErrors] = useState("");
  const [imgClass, setImgClass] = useState("image");
  const dispatch = useDispatch();
  
  // const { adminInfo } = useSelector((state) => state.readAdminAuthReducer);
  const { loading, error, userInfo, message } = useSelector(
    (state) => state.userLoginReducer
  );

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
      dispatch(loginAuth(email, password));
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

  const token = Cookies.get("Stdtoken");
  const id = Cookies.get("id");
  // console.log("mm", userInfo && userInfo.user.token);
  useEffect(() => {
    if (token) {
      history.push("/stddashboard");
    }
  }, [token]);

  console.log("dddddd", userInfo);
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
              <h2>Student Login</h2>
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

export default StdLogin;




