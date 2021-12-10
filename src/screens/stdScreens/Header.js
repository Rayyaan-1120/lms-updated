import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Teacher from "../components/sbil/teachers";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const register = useSelector((state) => state.registerReducer);

  const signOut = async () => {
    // console.log("sdas");
    await localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "#F7F7F7",
          boxShadow: "5px 1px 8px rgba(0, 0, 0, 0.2)",
          // borderBottom: "1px solid #e4dede",
          // boxShadow:
          //   "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(150, 245, 97, 0.20)",
        }}
      >
        {/* <div className="container-fluid my-1">
          <img
            style={{ width: 250 }}
            src="landscape_logo.png"
            className="logo-res"
            alt=""
          />
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
          </button> */}
        {localStorage.getItem("stdDataToken") ? (
          <div className="container-fluid my-1">
            <img
              style={{ width: 250 }}
              src="landscape_logo.png"
              className="logo-res"
              alt=""
            />
            <ul>
              <li
                className="nav-item nav-profile dropdown"
                style={{ listStyleType: "none" }}
              >
                <a
                  className="nav-link dropdown-toggle extra"
                  data-toggle="dropdown"
                  id="profileDropdown"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={localStorage.getItem("image")}
                    alt="profile"
                    width="30px"
                    height="30px"
                    style={{ borderRadius: 20 }}
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                  style={{ cursor: "pointer" }}
                >
                  <a className="dropdown-item" onClick={() => signOut()}>
                    <i className="ti-power-off text-primary" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="container-fluid my-1">
            <img
              style={{ width: 250 }}
              src="landscape_logo.png"
              className="logo-res"
              alt=""
            />
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
                {/* <li
                  className="nav-item mx-2"
                  style={{ fontSize: 16, backgroundColor: "#F7F7F7" }}
                >
                  <NavLink
                    className="nav-link"
                    to="/"
                    style={{ backgroundColor: "#F7F7F7" }}
                  >
                    Home
                  </NavLink>
                </li> */}
                <li className="nav-item mx-2" style={{ fontSize: 16 }}>
                  <NavLink
                    className="nav-link"
                    to="/"
                    style={{ backgroundColor: "#F7F7F7" }}
                  >
                    Registration
                  </NavLink>
                </li>
                {/* <li className="nav-item mx-2" style={{ fontSize: 16 }}>
                  <NavLink
                    className="nav-link"
                    to="/login"
                    style={{ backgroundColor: "#F7F7F7" }}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item mx-2" style={{ fontSize: 16 }}>
                  <NavLink
                    className="nav-link"
                    to="/entrytest"
                    style={{ backgroundColor: "#F7F7F7" }}
                  >
                    EntryTest
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        )}
        {/* </div> */}
      </nav>
    </>
  );
};
export default Header;
