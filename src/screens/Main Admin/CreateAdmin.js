import React from "react";
import Header from "../../component/Header";
import NewSideBar from "../../component/mainAdminComponents/newSideBar";

const CreateAdmin = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <NewSideBar />
        <div>adminlogin</div>
      </div>
    </>
  );
};

export default CreateAdmin;
