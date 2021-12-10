import React, { useState } from "react";
import "../screens/registration.css";
let InputField = (props) => {
  const { labelName, typeField, onChange, maxLength, placeholder, required,pattern,error } =
    props;

  return (
    <>
      <label style={{ fontWeight: "bold", color: "#585962" }} for="inputEmail4">
        {labelName}
      </label>
      <span style={{ color: "red" }} class="required">
        *
      </span>
      <input
        type={typeField}
        pattern={pattern}
        id="inputEmail4"
        error={error}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </>
  );
};
export default InputField;
