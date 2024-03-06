import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/LogIn/Login";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import "./App.css";
import { SidebarProvider } from "./context/sidebarContext";

function App() {
  const [loading, setLoading] = useState(true);

  const [selectedVatNumber, setSelectedVatNumber] = useState();
  const handleLiClick = (selectedVatNumber) => {
    setSelectedVatNumber(selectedVatNumber);
    setStartDate(null);
    setEndDate(null);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const [pageSelected, setPageSelected] = useState(1);
  const handlePageChange = (pageSelected) => {
    setPageSelected(pageSelected);
  };

  return (
    <SidebarProvider>
      <div className="app">
        <Sidebar
          handleLiClick={handleLiClick}
          handlePageChange={handlePageChange}
        />
        <Content
          selectedVatNumber={selectedVatNumber}
          handleFilter={handleFilter}
          handleClear={handleClear}
          startDate={startDate}
          endDate={endDate}
          pageSelected={pageSelected}
        />
      </div>
    </SidebarProvider>
  );
}

export default App;
