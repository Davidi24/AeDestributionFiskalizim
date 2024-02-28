import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SettingsIcon from "@mui/icons-material/Settings";

import { sidaBarIcons } from "../../utils/images";
import { logo } from "../../utils/images";

const Sidebar = ({ setSidebarPosition }) => {
  const items = ["Home", "Faturat e mia", "Prova", "Settings"];
  const [isSidebarOpen, setSidebar] = useState(true);
  const [selectedId, setSelectedId] = useState(0);
  const [firstIconClass, setFirstIconClass] = useState("icon1");

  useEffect(() => {
    if(selectedId === 3){
      setFirstIconClass(prevClass => prevClass + " icon11");
    }
    else{
      setFirstIconClass("icon1")
    }

  }, [selectedId])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setSidebar(false);
        setSidebarPosition(false);
      }
      else{
        setSidebar(true);
        setSidebarPosition(true);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarPosition]);



  const changeArrow = () => {
    setSidebar(!isSidebarOpen);
    setSidebarPosition(!isSidebarOpen);
  };

  const changeSelecteditem = (index) => {
    setSelectedId(index);
  };

  return (
    <>
      <div
        className={`wrapper ${
          isSidebarOpen ? "wrapper-open" : "wrapper-close"
        }`}
      >
        {isSidebarOpen ? (
          <ArrowBackIosIcon className="arrow" onClick={changeArrow} />
        ) : (
          <ArrowForwardIosIcon className="arrow" onClick={changeArrow} />
        )}
        <div className="sidebar-logo">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div id="vatNumber">{isSidebarOpen && <p>K21915002R</p>}</div>
        </div>
        <ul className="sidebar-items">
          {items.map((item, index) => (
            <div
              className={`listOfItems ${
                selectedId === index ? "itemSelected" : ""
              }`}
              key={index}
              onClick={() => changeSelecteditem(index)}
            >
              <li
                className={
                  selectedId === 3 ? "whiteBackground" : ""
                }
              >
                {typeof sidaBarIcons[index] === "string" ? (
                  <img src={sidaBarIcons[index]} alt={`icon-${index}`} />
                ) : (
                  <SettingsIcon className={firstIconClass} />
                )}
                {isSidebarOpen && <p>{item}</p>}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
