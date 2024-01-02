import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import { FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon

const Cards = ({ handleFilter, handleClear }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilterClick = () => {
    handleFilter(startDate, endDate); // Pass startDate and endDate to the handleFilter function
  };

  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy" // Selected date format when choosing a date
          placeholderText="MM/DD/YYYY" // Placeholder text in the specified format
          className="date-picker-input" // Add custom class for styling the input
          appendIcon={(props) => (
            <div
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <FaCalendarAlt {...props} size={20} color="#333" />
            </div>
          )}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)} // Update endDate state
          dateFormat="dd/MM/yyyy" // Selected date format when choosing a date
          placeholderText="MM/DD/YYYY" // Placeholder text in the specified format
          className="date-picker-input" // Add custom class for styling the input
        />
        <button onClick={handleFilterClick}>Filter</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Cards;
