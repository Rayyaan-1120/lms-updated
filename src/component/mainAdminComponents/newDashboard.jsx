import React from "react";
import NewBanner from "./newBanner";
import NewSideBar from "./newSideBar";
import "./newDash.css";
import NewCardBanner from "./newCardBanner";
import Quiz from "../../images/quiz.jpeg";
import AssImg from "../../images/assignement.jpeg";
import CoursesImg from "../../images/courses.jpeg";
import StdImg from "../../images/students.jpeg";
import Header from "../Header";
function NewDashBoard() {
  return (
    <>
      <Header />
      <div className="mainDashBox">
        <div className="sideBOxhai">
          <NewSideBar className="sideContainer" />
        </div>

        <div className="bannerBOxhai">
          <NewBanner />

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
