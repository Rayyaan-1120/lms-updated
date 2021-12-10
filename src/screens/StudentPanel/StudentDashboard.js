import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyMessage } from "../../Redux/action/adminAuth";
import { readUserAuth } from "../../Redux/action/userAuth";
import Cookies from "js-cookie";
import "./style.css";
import NewDashBoard from "../stdScreens/StdnewDashboard"
const StudentDashboard = ({ history }) => {
  const dispatch = useDispatch();
  // const { adminInfo, loadings } = useSelector(
  //   (state) => state.readAdminAuthReducer
  // );
  const { loadings } = useSelector(
    (state) => state.readUserAuthReducer
  );

  const {userInfo} = useSelector((state) => state.readUserAuthReducer);
  const token = Cookies.get("Stdtoken");
  const id = Cookies.get("id");

  // const tokenDetails = jwt.decode(token);
  // console.log("token", tokenDetails);

  // const id = Cookies.get("id");
  // const role = Cookies.get("role");

  useEffect(() => {
    if(token){
      dispatch(readUserAuth(token));
    }
  }, []);
  console.log('this is user info from redux',userInfo)
  // const loadProfile = () => {
  //   const token = Cookies.get(token);
  //   const id = Cookies.get(id);
  //   console.log(token, id);
  //   // dispatch(readAdminAuth(id, token));
  // };

  useEffect(() => {
    if (!token) {
      history.push("/stdlogin");
      // console.log(adminInfo);
    }
  }, [token]);
  // useEffect(async () => {
  //   // console.log("id", id, token);
  //   await dispatch(readAdminAuth(id, token));
  // }, []);
  // console.log("id", state.adminInfo && state.adminInfo.message);
  // useEffect(() => {
  //   if (adminInfo && adminInfo.length > 0) {
  //     console.log("info", adminInfo);

  //     // dispatch(emptyMessage());
  //   } else {
  //     history.push("adminlogin");
  //   }
  // }, [adminInfo]);
  useEffect(() => {
    dispatch(emptyMessage());
  }, []);
  // useEffect(() => {}, []);
  return (
    <div>
      {/* <>
        <Header userName={"Ss"} />
        <div className="banner-img1">
          <Banner1 />
        </div>
        <div className="sidebar-banner-container" style={{ display: "flex" }}>
          <SideBar />
          <Banner />
        </div>
      </> */}
      <NewDashBoard />
    </div>
  );
};

export default StudentDashboard;
