import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Cards.css";
import { FaCalendarAlt } from "react-icons/fa";

const Cards = ({ handleFilter, handleClear }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleFilterClick = () => {
    handleFilter(startDate, endDate);
  };

  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <p>From Date</p>

        <div className="startDate-Wraper">
          <DatePicker
            className="startDate"
            selected={startDate}
            onChange={handleStartDateChange} // Capture manually entered date
            id="datepicker-start"
            placeholderText="MM/DD/YYYY"
          />
         
        </div >
        <p>To Date</p>
        <div className="startDate-Wraper">
          <DatePicker
             className="startDate"
            selected={endDate}
            onChange={handleEndDateChange}
            id="datepicker-end"
            placeholderText="MM/DD/YYYY"
          />
        </div>
        <button onClick={handleFilterClick} className="filteri">
          Filter
        </button>
        <button onClick={handleClear} className="cleari">
          Clear
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Cards;
