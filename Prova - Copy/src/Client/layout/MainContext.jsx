import React, { useState } from "react";
import "./MainContext.css";

const MainContext = (isSidebarOpen) => {
  useState(() => {
    console.log(isSidebarOpen + "lol");
  });
  return <div className="mainwrapper mainwrapper-close"></div>;
};

export default MainContext;
