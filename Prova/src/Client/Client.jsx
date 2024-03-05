import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Client/Components/Sidebar/Sidebar";
import "./Client.css";
import TopContainer from "./Components/SideBarElementsContainers/Faturat/Top/TopContainer";
import NotificaMessages from "./Components/SideBarElementsContainers/Faturat/NotificaMessages/NotificaMessages";
import Table from "./Components/SideBarElementsContainers/Faturat/Table/Table";

export const Faturat = ({ sidebarPosition, setSidebarPosition }) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log(searchValue + " loluuu");
  }, [searchValue]);
  return (
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
            <TopContainer setSearchValue={setSearchValue} />
          </div>
        </div>
        <div className="table_wraper">
          <Table searchValue={searchValue} />
        </div>
      </div>
    </>
  );
};

export const HomePage = ({ sidebarPosition, setSidebarPosition }) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log(searchValue + " loluuu");
  }, [searchValue]);
  return (
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
          <div>lol</div>
        </div>
      </div>
    </>
  );
};

const Client = () => {
  const [sidebarPosition, setSidebarPosition] = useState(true);

  return (
    <div className="containerr">
      <Faturat
        sidebarPosition={sidebarPosition}
        setSidebarPosition={setSidebarPosition}
      />
    </div>
  );
};

export default Client;
