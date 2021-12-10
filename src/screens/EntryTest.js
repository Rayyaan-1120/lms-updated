import React from "react";
import Header from "../component/Header";

const EntryTest = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <h2>Comming Soon</h2>
      </div>
    </div>
  );
};

export default EntryTest;
