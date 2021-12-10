import React from "react";
// import "../screens/registration.css";
let AppDropDown = (props) => {
  const { labelName, propsArr, onChange } = props;
  return (
    <>
      <label style={{ color: "#585962", fontSize: 15 }} for="inputState">
        {labelName}
      </label>
      {/* <span style={{ paddingLeft: 2, color: "red" }} class="required">
        *
      </span> */}
      <select
        id="inputState"
        style={{ color: "darkgreen" }}
        onChange={onChange}
        style={{ fontSize: 13 }}
      >
        <option style={{ fontSize: 13 }}>Select Option</option>
        {propsArr.length != 0
          ? propsArr
              .filter((val) => {
                return val != null;
              })
              .map((e, i) => {
                return (
                  <option style={{ fontSize: 13 }} key={i} value={e}>
                    {e}
                  </option>
                );
              })
          : null}
      </select>
    </>
  );
};
export default AppDropDown;
