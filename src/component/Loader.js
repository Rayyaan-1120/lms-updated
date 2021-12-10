import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="spinner-border" role="status" style={{ marginLeft: "45%" }}>
      <span className="visually-hidden"></span>
    </div>
  );
};

export default Loader;
