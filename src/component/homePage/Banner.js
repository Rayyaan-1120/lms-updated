import React from "react";
import "./style.css";
import bannerImg from "../../images/homebanner.jpeg";

const Banner = () => {
  return (
    <div className="container-fuild banner-container">
     <div className="pt-3 pl-3">
     <h3 className="heading-text">JAWAN PAKISTAN</h3>
      <h3 className="sub-heading-text">LEARNING MANAGEMENT SYSTEM</h3>
      <p className="para-text text-justify">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
     </div>
    </div>
  );
};

export default Banner;
