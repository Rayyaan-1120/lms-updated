import React, { useState, useEffect } from "react";
import "./newSideBar.css";
import { NavLink } from "react-router-dom";

import {
  MdDashboard,
  RiBarChartHorizontalFill,
  GoSignOut,
  FaSearchengin,
  MdComputer,
  FaNewspaper,
  BiMessageSquareAdd,
  BiUserCheck,
} from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";

import Cookies from "js-cookie";

const NewSideBar = () => {
  let [sideBoxClass, setSideBoxClass] = useState("SidemainBox");
  let [sideList, setSideList] = useState("sideList");
  let [flag, setFlag] = useState(true);
  let [scrollSize, setScrollSize] = useState(window.innerWidth);

  const { adminInfo, loadings } = useSelector(
    (state) => state.readAdminAuthReducer
  );
  const logOut = () => {
    // alert("asdsadsa");
    // localStorage.clear();
    Cookies.remove("token");
  };
  useEffect(() => {
    if (scrollSize < 768) {
      setSideBoxClass("SidemainBox hide");
      setSideList("sideList sideListHide");
      setFlag(false);
    } else if (scrollSize > 768) {
      setSideBoxClass("SidemainBox");
      setTimeout(() => {
        setSideList("sideList");
      }, 500);
      setFlag(true);
    }
  }, [scrollSize]);

  window.addEventListener("resize", () => {
    setScrollSize(window.innerWidth);
  });

  const sideBarHide = () => {
    if (flag) {
      setSideBoxClass("SidemainBox hide");
      setSideList("sideList sideListHide");
      setFlag(false);
    } else {
      setSideBoxClass("SidemainBox");
      setTimeout(() => {
        setSideList("sideList");
      }, 500);
      setFlag(true);
    }
  };

  return (
    <>
   
      <div className={sideBoxClass}>
        
        
        <section className="sideBArBtn">
          <span>
            <RiBarChartHorizontalFill onClick={sideBarHide} />
          </span>
        </section>

        <section className={sideList}>
          <ul>
            <NavLink
              to="/mainadmindashboard"
              style={{ textDecoration: "none" }}
            >
              <li>
                <MdDashboard /> <span>DASHBOARD</span>
              </li>
            </NavLink>
            <NavLink to="/regstddata" style={{ textDecoration: "none" }}>
              <li>
                <FaSearchengin />
                <span>Search Registeration Data</span>
              </li>
            </NavLink>
            <NavLink to="/adminassignments">
            <li>
              <MdComputer />
              <span>Assignments</span>
            </li>
            </NavLink>
            <NavLink to="/createquiz" style={{ textDecoration: "none" }}>
              <li>
                <FaNewspaper />
                <span>Create Quiz</span>
              </li>
            </NavLink>
            {adminInfo && adminInfo.user.role == "mainAdmin" && (
              <NavLink to="/addcourse" style={{ textDecoration: "none" }}>
                <li>
                  <BiMessageSquareAdd />
                  <span> Add Course</span>
                </li>
              </NavLink>
            )}
              <NavLink to="/addattendance" style={{ textDecoration: "none" }}>
            <li>
              <BiUserCheck /> <span>Attendance</span>
            </li>
            </NavLink>
            {adminInfo && adminInfo.user.role == "mainAdmin" && (
              <NavLink to="/createAdmin" style={{ textDecoration: "none" }}>
                <li>
                  <BiUserCheck /> <span>Create Admin</span>
                </li>
              </NavLink>
            )}
            <NavLink
              to="/adminlogin"
              onClick={logOut}
              style={{ textDecoration: "none" }}
            >
              <li>
                <GoSignOut onClick={() => logOut()} />
                <span>SignOut</span>
              </li>
            </NavLink>
          </ul>
        </section>
      </div>
    </>
  );
};

export default NewSideBar;
