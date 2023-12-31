import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedVatNumber, setSelectedVatNumber] = useState();

  const handleLiClick = (index, selectedVatNumber) => {
    setSelectedVatNumber(selectedVatNumber);
  };

  return (
    <>
      <div className="app">
        <Sidebar handleLiClick={handleLiClick} />
        <Content selectedVatNumber={selectedVatNumber} />
      </div>
    </>
  );
}

export default App;
