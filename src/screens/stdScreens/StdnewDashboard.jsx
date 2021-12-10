import React from "react";
import NewBanner from "./StdnewBanner";
import NewSideBar from "./StdnewSideBar";
import "./StdnewDash.css";
import NewCardBanner from "./StdnewCardBanner";
import Quiz from "../../images/quiz.jpeg";
import AssImg from "../../images/assignement.jpeg";
import CoursesImg from "../../images/courses.jpeg";
import StdImg from "../../images/students.jpeg";
import Header from "./Header";
import Stddetails from "./stddetails";
import { useSelector } from 'react-redux'

function NewDashBoard() {

  const { userInfo } = useSelector((state) => state.readUserAuthReducer);


  return (
    <>
      <Header />
      <div className="mainDashBox">
        <div className="sideBOxhai">
          <NewSideBar className="sideContainer" />
        </div>

        <div className="bannerBOxhai">
          {userInfo !== {} ? (
            <Stddetails />
          ) : 'hello world'}

          <div className="cardBanBoxs">
            <NewCardBanner name="Quizzes" imgUrl={Quiz} count="5" />
            <NewCardBanner name="Assignment" imgUrl={AssImg} count="10" />
            <NewCardBanner name="Courses" imgUrl={CoursesImg} count="15" />
            <NewCardBanner name="Students" imgUrl={StdImg} count="400" />
          </div>
        </div>
      </div>
    </>
  );
}
export default NewDashBoard;
