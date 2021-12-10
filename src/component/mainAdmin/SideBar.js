import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
const SideBar = () => {
  const { adminInfo, loadings } = useSelector(
    (state) => state.readAdminAuthReducer
  );
  const logOut = () => {
    // alert("asdsadsa");
    // localStorage.clear();
    Cookies.remove("token");
    Cookies.remove("id");
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state.readAdminAuthReducer);

  return (
    <>
      <div className="main-container">
        <nav
          className="sidebar sidebar-offcanvas"
          id="side-bar"
          style={{ width: 270, height: "100vh", backgroundColor: "#ffffff" }}
        >
          <ul>
            {/* <div className="sidebar-container">
              <div
                style={{
                  display: "flex",
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#06693B",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "#ffffff" }}>A</p>
              </div>
              <div style={{ marginTop: 10, marginLeft: 15, color: "grey" }}>
                <p>Admin</p>
              </div>
            </div> */}
            {/* <NavLink
              to="/mainadmindashboard"
              style={{ textDecoration: "none" }}
            >
              <li className="nav-item list-items">
                <i className="list-icon fas  fa-address-book"></i>
                <p className="list-text">Dashboard</p>
              </li>
            </NavLink>
            <NavLink to="/regstddata" style={{ textDecoration: "none" }}>
              <li className="nav-item list-items">
                <i className="list-icon fas  fa-user-graduate"></i>{" "}
                <p className="list-text">Search registeration data</p>
              </li>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item list-items">
                <i className="list-icon fas  fa-tasks"></i>
                <p className="list-text"> Assignments</p>
              </li>
            </NavLink>
            {adminInfo && adminInfo.user.role == "mainAdmin" && (
              <NavLink to="/createAdmin" style={{ textDecoration: "none" }}>
                <li className="nav-item list-items">
                  <i className="list-icon fas  fa-tasks"></i>
                  <p className="list-text"> Create Admin</p>
                </li>
              </NavLink>
            )} */}

            {/* {role == "mainAdmin" ? (
              <NavLink to="/createquiz" style={{ textDecoration: "none" }}>
                <li className="nav-item list-items">
                  <i className="list-icon fas  fa-user-shield"></i>{" "}
                  <p className="list-text">Create Quiz</p>
                </li>
              </NavLink>
            ) : null}
            {role == "instituteAdmin" ? (
              <NavLink to="/quizassign" style={{ textDecoration: "none" }}>
                <li className="nav-item list-items">
                  <i className="list-icon fas  fa-user-shield"></i>{" "}
                  <p className="list-text">Quizz</p>
                </li>
              </NavLink>
            ) : null} */}

            {/* <NavLink to="/createquiz" style={{ textDecoration: "none" }}>
              <li className="nav-item list-items">
                <i className="list-icon fas  fa-user-shield"></i>{" "}
                <p className="list-text">Quiz</p>
              </li>
            </NavLink>

            {adminInfo && adminInfo.user.role == "mainAdmin" && (
              <NavLink to="/addcourse" style={{ textDecoration: "none" }}>
                <li className="nav-item list-items">
                  <i className="list-icon fas  fa-plus"></i>{" "}
                  <p className="list-text">Add Course</p>
                </li>
              </NavLink>
            )}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item list-items">
                <i className="list-icon fas  fa-chalkboard-teacher"></i>{" "}
                <p className="list-text">Attendance</p>
              </li>
            </NavLink>
            <NavLink
              onClick={() => logOut()}
              to="/adminlogin"
              style={{ textDecoration: "none" }}
            >
              <li className="nav-item list-items">
                <i className="list-icon fas  fa-sign-out-alt"></i>{" "}
                <p className="list-text">Logout</p>
              </li>
            </NavLink> */}
            {loadings && <p>loadings</p>}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
