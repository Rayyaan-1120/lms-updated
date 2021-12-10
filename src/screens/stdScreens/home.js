import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/Header";
import UserSideBar from "../../component/studentComponent/userSideBar";
import logo1 from "../../images/logo1.png";
import { emptyMessage } from "../../Redux/action/stdAuth";
import { NavLink } from "react-router-dom";

// import Teacher from "../components/sbil/teachers";
const Home = () => {
  const dispatch = useDispatch();
  const [locationKeys, setLocationKeys] = useState([]);
  const { loading, error, userInfo, message } = useSelector(
    (state) => state.userLoginReducer
  );

  // window.addEventListener("popstate", e => {
  //   // Nope, go back to your page
  //   // history.go('');
  // alert('Can Not go back!')
  // });

  useEffect(() => {
    dispatch(emptyMessage());
  }, []);

  const history = useHistory();

  window.addEventListener("popstate", (e) => {
    history.replace("/stdHome");
  });

  // useEffect(() => {
  //   return history.listen(location => {
  //     if (history.action === 'PUSH') {
  //       setLocationKeys([ location.key ])
  //    alert('go forward')
  //     }

  //     if (history.action === 'POP') {
  //       if (locationKeys[1] === location.key) {
  //         setLocationKeys(([ _, ...keys ]) => keys)
  //         alert('go back')
  //         // Handle forward event

  //       } else {
  //         setLocationKeys((keys) => [ location.key, ...keys ])
  //         alert('nothing')
  //         // Handle back event

  //       }
  //     }
  //   })
  // }, [ locationKeys, ])

  const signOut = async () => {
    // console.log("sdas");
    await localStorage.setItem("stdDataToken", "");
    history.push("/login");
  };

  return (
    <div className="side-res" style={{ backgroundColor: "#f5f7ff" }}>
      <Header />
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon text-center"
          style={{
            width: 130,
            color: "black",
            borderRadius: 5,
            paddingTop: 5,
            marginLeft: 130,
          }}
        >
          Show Option
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li
            className="nav-item mx-2"
            style={{ fontSize: 16, backgroundColor: "#F7F7F7" }}
          >
            <NavLink
              className="nav-link"
              to="/"
              style={{ background: "dodgerblue", textAlign: "center" }}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div> */}
      <div className="main-quiz-home" style={{ display: "flex" }}>
        <UserSideBar />

        <div className="text-center" style={{ margin: "40px" }}>
          <h1 className="std-text-res" style={{ color: "darkgreen" }}>
            Welcome To The Student Portal Of Jawan Pakistan
          </h1>
          <img style={{}} src={logo1} alt="" className="w-50 std-image-res" />
        </div>
      </div>
      {/* <h1 style={{color:"black",backgroundColor:'red'}}>Hello World Home</h1>
      <button onClick={()=>signOut()}>signOut</button> */}
    </div>
  );
};

export default Home;
