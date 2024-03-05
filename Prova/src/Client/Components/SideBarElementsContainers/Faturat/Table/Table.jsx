import React, { useState, useEffect } from "react";
import "./Table.css";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { dataa } from "../../../../Controllers/Faturat/retriveFaturat";
import { setDate } from "date-fns";
import { CoPresentOutlined } from "@mui/icons-material";

let currentData;

function Table({ searchValue }) {
  const [headerButtonchecked, setheaderButtonchecked] = useState(false);
  const hendleHeaderButtonCheck = () => {
    if (headerButtonchecked == true) {
      setheaderButtonchecked(false);
    } else {
      setheaderButtonchecked(true);
    }
  };

  const handleRowSelect = (id) => {
    console.log("qs");
    if (!rowselected.includes(id)) {
      rowselected.push(id);
    } else {
      rowselected.pop(id);
    }
    console.log(rowselected);
  };

  const columns = [
    {
      columnName: "", // Checkbox for row selection
    },
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

  const [data, setData] = useState(dataa);

  useEffect(() => {
    if (searchValue) {
      const filteredData = dataa.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      currentData = filteredData;
      setData(filteredData);
    } else {
      setData(dataa);
    }
  }, [searchValue]);

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 9;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageClick = (selected) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(data.length / rowsPerPage);

  const prevPageClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPageClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount));
  };

  const rowselected = [];

  return (
    <>
      <div>
        <div className="table-container">
          <table>
            <thead>
              <tr id="trr">
                <th>
                  <input
                    type="checkbox"
                    onClick={() => hendleHeaderButtonCheck()}
                  ></input>
                </th>
                {columns.slice(1).map((column, index) => (
                  <th key={index}>{column.columnName}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={index}>
                  <td>
                    {headerButtonchecked ? (
                      <input
                        type="checkbox"
                        checked
                        onClick={() => handleRowSelect(index)} // Pass row.id to handleRowSelect
                      />
                    ) : (
                      <input
                        type="checkbox"
                        onClick={() => handleRowSelect(index)} // Pass row.id to handleRowSelect
                      />
                    )}
                  </td>
                  {columns.slice(1).map((column, columnIndex) => (
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
                  {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                    (data, index) => (
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
                    )
                  )}
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

export { currentData };

export default Table;
