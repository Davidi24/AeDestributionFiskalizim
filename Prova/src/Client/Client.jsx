import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Client/Components/Sidebar/Sidebar";
import "./Client.css";
import TopContainer from "./Components/SideBarElementsContainers/Faturat/Top/TopContainer";
import NotificaMessages from "./Components/SideBarElementsContainers/Faturat/NotificaMessages/NotificaMessages";
import Table from "./Components/SideBarElementsContainers/Faturat/Table/Table";

import {
  BrowserRouter as Router,
  Navigate,
  useNavigate,
} from "react-router-dom";

export const Faturat = ({ sidebarPosition, setSidebarPosition }) => (
  <>
    <div className="sidebar-wrapper">
      <Sidebar setSidebarPosition={setSidebarPosition} />
    </div>
    <div
      className={`content leftside ${
        sidebarPosition ? "sideBarOpen" : "sideBarClose"
      }`}
    >
      <div>
        <div className="top-top">
          <NotificaMessages />
        </div>
        <div className="top-bottom">
          <TopContainer />
        </div>
      </div>
      <div className="table_wraper">
        <Table />
      </div>
    </div>
  </>
);



const Home = ({ sidebarPosition, setSidebarPosition }) => (
  <>
    <div className="sidebar-wrapper">
      <Sidebar setSidebarPosition={setSidebarPosition} />
    </div>
    <div
      className={`content leftside ${
        sidebarPosition ? "sideBarOpen" : "sideBarClose"
      }`}
    >
      <div>
        Prova
      </div>
    </div>
  </>
);


const Client = () => {
  const [sidebarPosition, setSidebarPosition] = useState(true);

  return (
    <div className="containerr">
      <Routes>
        {/* Define the specific route first */}
        <Route
          path="/client/faturattt"
          element={<Faturat sidebarPosition={sidebarPosition} setSidebarPosition={setSidebarPosition} />}
        />
        {/* Define other routes, if any */}
        <Route
          path="/client"
          element={<Home sidebarPosition={sidebarPosition} setSidebarPosition={setSidebarPosition} />}
        />
      </Routes>
    </div>
  );
};

export default Client;