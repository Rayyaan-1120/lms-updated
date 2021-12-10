import React from "react";
// import "../screens/registration.css";
let AppDropDown = (props) => {
  const { labelName, propsArr, onChange } = props;
  return (
    <>
      <label style={{ color: "#585962", fontSize: 19 }} for="inputState">
        {labelName}
      </label>
      {/* <span style={{ paddingLeft: 2, color: "red" }} class="required">
        *
      </span> */}
      <select
        style={{ color: "darkgreen" }}
        id="inputState"
        onChange={onChange}
      >
        {propsArr != null
          ? propsArr.map((e, i) => {
              return (
                <option key={i} value={e}>
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
