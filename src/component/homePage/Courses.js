import React from "react";
import cardImg from "../../images/ai.jpeg";
import cardImg1 from "../../images/web.jpeg";
import cardImg2 from "../../images/graphic.jpeg";
import './style.css'
const Courses = () => {
  return (
    <div className='mt-5 '>
      <div ><h3 className= 'text-center section-title'> ~~~ Course Details ~~~</h3></div>
      <div className='custom-course-style'
        // style={{
        //   display: "flex",
        //   flexDirection:'row',
        //   justifyContent: "space-around ",
        //   marginTop: 30,
        //   flexWrap: "wrap",
        //   width:1000
        // }}
      >
        <div className="card custom-card ">
          <img src={cardImg} className="card-img-top card-img-custom" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Artificial intelligence</h6>
          </div>
        </div>
        <div className="card custom-card" >
          <img src={cardImg1} className="card-img-top card-img-custom" alt="..." />
          <div className="card-body">
            <h6 className="card-title">Web and mobile hybird application</h6>
          </div>
        </div>
        <div className="card custom-card" >
          <img src={cardImg2} className="card-img-top card-img-custom" alt="..." />
          <div className="card-body">
            <h6 className="card-title"> Graphic designing</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
