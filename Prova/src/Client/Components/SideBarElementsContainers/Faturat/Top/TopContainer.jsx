import React from "react";
import { exportData } from "../../../../utils/images";
import "./TopContainer.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

function TopContainer() {
  return (
    <div className="container">
      <div className="exportData">
        <img src={exportData} alt="" />
        <p>export</p>
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
        <input type="text" placeholder="Seach" />
        <div id="printfatButton">
          <LocalPrintshopOutlinedIcon id="plus" />
          <button id="btnPrint">Printo faturen</button>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
