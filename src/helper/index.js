import React, { useState } from "react";
import { useSelector } from "react-redux";
export const IsAuth = () => {
  const state = useSelector((state) => state.readAdminAuthReducer);
  console.log("state", state);
};
