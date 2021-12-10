import { Link } from "react-router-dom";
import "./sideBar.css";
const UserSideBar = () => {
  return (
    <>
      {/* partial */}
      {/* partial:partials/_sidebar.html */}
      <nav
        className="sidebar sidebar-offcanvas side-bar-res"
        id="sidebar"
        style={{ width: 300, backgroundColor: "white", height: "91vh" }}
      >
        <ul className="nav">
          {/* <li className="nav-item">
            <Link className="nav-link" to="/user/Home">
              <i className="icon-grid menu-icon" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li> */}

          <li className="nav-item" style={{ marginLeft: 50, marginTop: 20 }}>
            <h4 className="side-text-res">
              Welcome {localStorage.getItem("fullName")}
            </h4>
          </li>
          {/* <li className="nav-item" style={{ marginLeft: 30 }}>
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="icon-layout menu-icon" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 70px",
                  backgroundColor: "dodgerblue",
                  color: "white",
                  borderRadius: 8,
                }}
              >
                <span className="menu-title" style={{}}>
                  Quiz
                </span>
              </div>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item" style={{}}>
                  <Link
                    style={{ color: "black", textAlign: "center" }}
                    className="nav-link"
                    to="/attemptQuiz"
                  >
                    View
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default UserSideBar;
