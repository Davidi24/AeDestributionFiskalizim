import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DataPicker.css';

function DataPicker() {
  const [startDate, setStartDate] = useState(null);
  const [placeholder, setPlaceholder] = useState('Select a date');

  const handleDateChange = (date) => {
    setStartDate(date);
    if (date) {
      const formattedDate = formatDate(date);
      setPlaceholder(formattedDate);
    } else {
      setPlaceholder('Select a date');
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <DatePicker
      showIcon
      selected={startDate}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
      onChange={handleDateChange}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          style={{ color: '#0a0a40' }}
        >
          <mask id="ipSApplication0">
            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
              <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
              <path
                fill="#fff"
                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
              ></path>
            </g>
          </mask>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipSApplication0)"
          ></path>
        </svg>
      }
    />
  );
}

export default DataPicker;
