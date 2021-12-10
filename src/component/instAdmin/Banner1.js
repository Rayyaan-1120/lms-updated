import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/bannerf.jpeg";

const Banner1 = () => {
  return (
    <div>
      <img
        className="img-fluid"
        style={{ height: 150 }}
        src={bannerImg}
        alt="Banner"
      />
    </div>
  );
};

export default Banner1;
