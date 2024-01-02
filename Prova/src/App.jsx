import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedVatNumber, setSelectedVatNumber] = useState();
  const handleLiClick = (index, selectedVatNumber) => {
    setSelectedVatNumber(selectedVatNumber);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = () => {
    const start = startDate ? startDate.toLocaleDateString() : "-1 -1 -1";
    const end = endDate ? endDate.toLocaleDateString() : "-1 -1 -1";
    console.log(start, end);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <>
      <div className="app">
        <Sidebar handleLiClick={handleLiClick} />
        <Content
          selectedVatNumber={selectedVatNumber}
          handleFilter={handleFilter}
          handleClear={handleClear}
        />
      </div>
    </>
  );
}

export default App;
