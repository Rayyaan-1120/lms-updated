import React from "react";
import { Link } from "react-router-dom";
import quizImg from "../../images/quiz.jpeg";
import bannerImg from "../../images/bannerf.jpeg";
import studetsImg from "../../images/students.jpeg";
import assignmentImg from "../../images/assignement.jpeg";
import coursesImg from "../../images/courses.jpeg";
const Banner = () => {
  const item = [
    { id: 1, img: quizImg, title: "Quizzes", number: 3 ,
  path:"/"},
    {
      id: 2,
      img: assignmentImg,
      title: "Assigments",
      number: 6,
      path:"/"
    },
    {
      id: 3,
      img: coursesImg,
      title: "Courses",
      number: 5,
      path:"/editcourse"
    },
    {
      id: 4,
      img: studetsImg,
      title: "Students",
      number: 400,
      path:"/"
    },
  ];
  return (
    <div className="container-fluid">
      <img
        className="img-fluid banner-img"
        style={{ width: "100%" }}
        src={bannerImg}
        alt="Banner"
      />
      <div className="cardWrappermain">
        {item.map((v, i) => {
          return (
            <div
              className="cardWrapper"
              key={i}
              style={{
                margin: "20px",
                width: "270px",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                borderRadius: 10,
              }}
            >
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "150px",
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                  }}
                  src={v.img}
                  alt="Imges"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div className="card-tittle">
                  <p style={{ paddingLeft: 5 }}>{v.title}</p>
                </div>
                <p style={{ color: "green", fontWeight: "bold", fontSize: 20 }}>
                  {v.number}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Link to={v.path} style={{ textDecoration: "none" }}>
                  <div className="btn1">
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      View Details
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
