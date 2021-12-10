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
import { logout,emptyMessage } from "../Redux/action/adminAuth";
import { createUserAuth } from "../Redux/action/userAuth";
const CreateStd = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(
    (state) => state.createUserReducer
  );

  const { userInfo } = useSelector((state) => state.adminLoginReducer);

  // const redirect = location.search ? location.search.split("=")[1] : `/`;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/registration");
  //   }
  // }, [userInfo, history]);

  const submitHandler = (e) => {
    if(!email){
      alert('Enter Email')
    }

    else if(!rollNo){
      alert('Enter Roll No')
    }
    else{

      e.preventDefault();
      //Dispatch Login
      dispatch(createUserAuth(email, password,rollNo));
      setEmail("");
      setRollNo("");
      setPassword("");
    }
  };

  const generate = () => {
    var chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    setPassword(randomstring);
    // console.log(password);
  };
  const Logout = () => {
    localStorage.clear("adminEmail");
    props.history.replace("/adminlogin");
  };
const createPdf =()=>{
  props.history.push('/regstddata')
}

  useEffect(() => {
    dispatch(emptyMessage())
    // const abc = localStorage.getItem("adminEmail");
    // if (!abc) {
    //   props.history.replace("/adminlogin");
    // }
  },[]);
  return (
    <>
      {/* <Header /> */}

      <div
        class="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <nav>
          <div class="image">
            <img src={LandscapeLogo} alt="Logo" />
          </div>
        </nav> */}
        <main>
          {/* <div class="image">
            <img src={LoginImage} alt="Login" />
          </div> */}
          <div class="form">
            <div class="heading">
              <h2>Create Students</h2>
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
                  <i class="fas fa-envelope"></i>
                </div>

                <input
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  type="text"
                  placeholder="Roll No"
                />
              </label>
              <label>
                <div class="icon">
                  <i class="fas fa-lock"></i>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Password"
                />
              </label>

              {loading ? (
                <Loader />
              ) : (
                <input type="submit" value="Create User" />
              )}
              {/* {loading && <Loader />} */}
            </form>
          </div>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="success">{message}</Message>}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 15,
              marginLeft:500,
            }}
          >
            <input
              type="submit"
              onClick={generate}
              style={{
                fontSize: 18,
                padding: 14,
                backgroundColor: "dodgerblue",
                color: "white",
                borderRadius: 10,
                border: "none",
              }}
              value="Generate Password"
            />
          </div>
        </main>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: 20,
          }}
        >
          <button
            style={{
              backgroundColor: "dodgerblue",
              border: "none",
              padding: 12,
              marginRight:10,
              color: "white",
              borderRadius: 5,
            }}
            onClick={createPdf}
          >
            Create PDF 
          </button>
          <button
            style={{
              backgroundColor: "dodgerblue",
              border: "none",
              padding: 12,
              color: "white",
              borderRadius: 5,
            }}
            onClick={Logout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateStd;
