import React from "react";
import AboutImg from "../../images/about.jpeg";
import './style.css'
const About = () => {
  return (
    <div className="mt-5 mb-5 custom-mobile">
    <div><h3 className= 'text-center section-title'>~~~ About Us ~~~</h3></div>
    <div className="">
      <div className="about-div align-item">
        <div className="about-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            repellendus eveniet porro numquam mollitia, maiores illo at
            consectetur perferendis? Vero, illo nihil? Nam, est? Reiciendis
            expedita eveniet neque aperiam iure. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Accusantium ullam exercitationem,
            expedita explicabo distinctio sint odit ea, tenetur et at amet nihil
            consectetur perferendis. Cumque commodi tempore neque fugiat
            repellendus!
          </p>
        </div>
        <div className="about-pic mb-5 img-about">
          <img className="card-img-top img-about" src={AboutImg} alt="Card image cap"  />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

