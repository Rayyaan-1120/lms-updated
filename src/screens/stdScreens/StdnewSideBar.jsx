import React, { useState, useEffect } from "react";
import "./StdnewSideBar.css";
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

  const logOut = () => {
    // alert("asdsadsa");
    // localStorage.clear();
    Cookies.remove("Stdtoken");
  };
  useEffect(() => {
    if (scrollSize < 548) {
      setSideBoxClass("SidemainBox hide");
      setSideList("sideList sideListHide");
      setFlag(false);
    } else if (scrollSize > 548) {
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
              to="/stddashboard"
              style={{ textDecoration: "none" }}
            >
              <li>
                <MdDashboard /> <span>DASHBOARD</span>
              </li>
            </NavLink>
            <NavLink to="/stdprofile" style={{ textDecoration: "none" }}>
              <li>
                <FaSearchengin />
                <span>Profile</span>
              </li>
            </NavLink>
            <NavLink to="/stdassignment" style={{ textDecoration: "none" }}>
            <li>
              <MdComputer />
              <span>Assignments</span>
            </li>
            </NavLink>
            <NavLink to="/stdquiz" style={{ textDecoration: "none" }}>
              <li>
                <FaNewspaper />
                <span>Quiz</span>
              </li>
            </NavLink>
            
            <NavLink to="/stdattendance" style={{ textDecoration: "none" }}>
            <li>
              <BiUserCheck /> <span>Attendance</span>
            </li>
              </NavLink>
            
            <NavLink
              to="/stdlogin"
              onClick={logOut}
              style={{ textDecoration: "none" }}
            >
              <li>
                <GoSignOut onClick={()=>logOut()} />
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
