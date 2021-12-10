import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ userName }) => {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.readAdminAuthReducer);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "#F7F7F7",
          boxShadow: "5px 1px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="container-fluid my-1">
          <img style={{ width: 250 }} src="landscape_logo.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item " style={{ listStyleType: "none" }}>
                <a
                  style={{ color: "#878787", cursor: "pointer" }}
                  className="nav-link dropdown-toggle extra"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img
                    src="logo192.png"
                    width="30px"
                    height="30px"
                    style={{
                      borderRadius: 20,
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  />
                  {userName ? userName : "Admin"}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown custom-nav1"
                  aria-labelledby="profileDropdown"
                  style={{ cursor: "pointer" }}
                >
                  <a
                    className="dropdown-item dropdownbtncustom"
                    // onClick={()=>signOut()}
                  >
                    <p style={{ marginLeft: "30%" }}> Settings</p>
                  </a>
                  <a
                    className="dropdown-item dropdownbtncustom "
                    // onClick={()=>signOut()}
                  >
                    <p style={{ marginLeft: "30%" }}> Logout</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
