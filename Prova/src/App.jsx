import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedVatNumber, setSelectedVatNumber] = useState();
  const handleLiClick = (selectedVatNumber) => {
    setSelectedVatNumber(selectedVatNumber);
    setStartDate(null);
    setEndDate(null);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = (startDate, endDate) => {
    const start = startDate ? startDate.toLocaleDateString() : null;
    const end = endDate ? endDate.toLocaleDateString() : null;
    setStartDate(start);
    setEndDate(end);
  };
  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const [pageSelected, setPageSelected] = useState(1);

  const handlePageChange = (pageSelected) => {
     setPageSelected(pageSelected);
     console.log(pageSelected)
  };

  return (
    <>
      <div className="app">
        <Sidebar handleLiClick={handleLiClick}  handlePageChange={handlePageChange} />
        <Content
          selectedVatNumber={selectedVatNumber}
          handleFilter={handleFilter}
          handleClear={handleClear}
          startDate={startDate}
          endDate={endDate}
          pageSelected={pageSelected}
        />
      </div>
    </>
  );
}

export default App;
