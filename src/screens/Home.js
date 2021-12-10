import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "../component/Header";
import Main from "../component/homePage/Main";
// import Teacher from "../components/sbil/teachers";

const Home = () => {
  const dispatch = useDispatch();
  // const register = useSelector((state) => state.registerReducer);

  // const submit = () => {
  //   console.log("asdsads");
  //   dispatch(stdRegistrationGet());
  // };

  return (
    <>
      <Header />
      <Main/>
    </>
  );
};
export default Home;
