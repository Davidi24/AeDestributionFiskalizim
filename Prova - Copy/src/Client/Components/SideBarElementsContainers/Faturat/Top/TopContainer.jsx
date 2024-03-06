import React, { useState } from "react";
import { exportData } from "../../../../utils/images";
import "./TopContainer.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { DowloadDataExel } from "../../../../Controllers/Faturat/retriveFaturat";

function TopContainer({ setSearchValue }) {
  const [searchInput, setSearchInput] = useState("");

  const DownloadExel = () => {
    DowloadDataExel();
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="exportData" onClick={DownloadExel}>
        <img src={exportData} alt="" />
        <p>Export</p>
      </div>
      <div className="delete">
        <DeleteForeverIcon id="delete-icon" />
        <p>Delete</p>
      </div>
      <div className="right-div">
        <div>
          {" "}
          <SearchIcon id="search-icon" />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <div id="printfatButton">
          <LocalPrintshopOutlinedIcon id="plus" />
          <button id="btnPrint">Printo faturen</button>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
