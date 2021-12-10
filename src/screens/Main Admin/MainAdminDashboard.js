import React, { useEffect } from "react";
import Header from "../../component/mainAdmin/Header";
import SideBar from "../../component/mainAdmin/SideBar";
import Banner from "../../component/mainAdmin/Banner";
import Banner1 from "../../component/mainAdmin/Banner1";
import { useSelector, useDispatch } from "react-redux";
import { readAdminAuth, emptyMessage } from "../../Redux/action/adminAuth";
import jwt from "jsonwebtoken";

import Cookies from "js-cookie";
import "./style.css";
import NewDashBoard from "../../component/mainAdminComponents/newDashboard"
const MainAdminDashboard = ({ history }) => {
  const dispatch = useDispatch();
  // const { adminInfo, loadings } = useSelector(
  //   (state) => state.readAdminAuthReducer
  // );
  const { adminInfo, loadings } = useSelector(
    (state) => state.readAdminAuthReducer
  );

  const { userInfo } = useSelector((state) => state.adminLoginReducer);
  const token = Cookies.get("token");
  const id = Cookies.get("id");

  // const tokenDetails = jwt.decode(token);
  // console.log("token", tokenDetails);

  // const id = Cookies.get("id");
  // const role = Cookies.get("role");

  useEffect(() => {
    // console.log("id", id, token);
    if(token){
      dispatch(readAdminAuth(token));
    }
  }, []);
  console.log(adminInfo)
  // const loadProfile = () => {
  //   const token = Cookies.get(token);
  //   const id = Cookies.get(id);
  //   console.log(token, id);
  //   // dispatch(readAdminAuth(id, token));
  // };

  useEffect(() => {
    if (!token) {
      history.push("/adminlogin");
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

export default MainAdminDashboard;
