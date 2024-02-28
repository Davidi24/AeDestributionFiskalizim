import React, { useState, useEffect } from "react";
import "./Table.css";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { data } from "../../../../Controllers/Faturat/retriveFaturat";

function Table() {
  const columns = [
    { columnName: "Name" },
    { columnName: "Surname" },
    { columnName: "Age" },
    { columnName: "City" },
    { columnName: "Country" },
    { columnName: "Occupation" },
    { columnName: "Email" },
    { columnName: "Phone" },
    { columnName: "Address" },
    { columnName: "Company" },
    { columnName: "Salary" },
  ];

  const [currentPage, setCurrentPage] = useState(1); 
  const rowsPerPage = 9;

  // Calculate the index of the first and last rows based on the current page and rows per page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Slice the data array to get the rows for the current page
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageClick = (selected) => {
    setCurrentPage(selected);
  };

  // Calculate the total number of pages based on the number of rows and rows per page
  const pageCount = Math.ceil(data.length / rowsPerPage);


  const prevPageClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure not less than 1
  };

  const nextPageClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount)); // Ensure not more than pageCount
  };

  useEffect(()=>{
    console.log(Math.ceil(data.length) + "lol")
  })

 
// Render the pagination buttons based on the current page and total number of pages
const getPaginationButtons = () => {
  const numOfPages = Math.ceil(data.length / rowsPerPage); // Calculate the number of pages based on total rows
  const numOfButtons = Array.from({ length: numOfPages }, (_, i) => i + 1);
  let paginationButtons = [...numOfButtons];
  if (numOfPages > 5) {
    if (currentPage > 2) {
      paginationButtons = [
        1,
        "...",
        ...paginationButtons.slice(currentPage - 2, currentPage + 1),
      ];
    }
    if (currentPage < numOfPages - 1) {
      paginationButtons = [
        ...paginationButtons.slice(0, currentPage + 1),
        "...",
        numOfPages,
      ];
    }
  }
  return paginationButtons;
};


  const arrOfCurrButtons = getPaginationButtons();

  return (
    <>
      <div>
        <div className="table-container">
          <table>
            <thead>
              <tr id="trr">
                {columns.map((column, index) => (
                  <th key={index}>{column.columnName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>
                      {row[column.columnName.toLowerCase()]}
                    </td>
                  ))}
                  <td>
                    <div className="id_wraper">
                      <ModeEditOutlineOutlinedIcon id="edit" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div className="pagination-putinright">
            <div className="table-filter-info">
              <div className="dt-pagination">
                <ul className="dt-pagination-ul">
                  <li
                    className={`dt-item ${currentPage === 1 ? "disabled" : ""}`}
                  >
                    <a className="dt-link" onClick={prevPageClick}>
                      Prev
                    </a>
                  </li>
                  {arrOfCurrButtons.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={`dt-item ${
                          currentPage === data ? "active" : ""
                        }`}
                      >
                        <a
                          className="dt-link"
                          onClick={() => handlePageClick(data)}
                        >
                          {data}
                        </a>
                      </li>
                    );
                  })}
                  <li
                    className={`dt-item ${
                      currentPage === pageCount ? "disabled" : ""
                    }`}
                  >
                    <a className="dt-link" onClick={nextPageClick}>
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
