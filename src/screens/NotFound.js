import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
function NotFound() {
  return (
    <div>
      <div className="fullHeight bg-white d-flex justify-content-center mt-5">
        <div className="text-center">
          {/* <div className="p-5 rounded d-inline-block shadow"> */}
            <img src={logo} width="200px" />
          {/* </div> */}
          <h1 className="fs-1 text-danger py-5">Page Not Found</h1>
          <Link className="fs-3 mt-2 btn btn-primary" to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
