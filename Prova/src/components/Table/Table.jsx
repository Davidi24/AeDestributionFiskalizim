import React, { useEffect, useState } from "react";
import { Table as AntTable } from "antd";
import "./Table.css";
import { columns } from "../../data/data";
import { getTableInfo } from "./TableFunctionalities/populateTable";
import TextField from "@mui/material/TextField";

const CustomTable = ({ selectedVatNumber }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [searchValue, setSearchValue] = useState(""); 

  // Fetch all data initially
  const fetchData = async (id) => {
    setLoading(true);
    try {
      const newData = await getTableInfo(id);
      setData([...newData]);
      setPaginatedData([...newData]);
    setTotalPages(newData.length)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedVatNumber);
  }, [selectedVatNumber]);

  // Handle pagination change
  const handlePageChange = (page) => {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const slicedData = data.slice(startIndex, endIndex);
    setPaginatedData([...slicedData]);
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  
    // Filter data based on the search input value
    const filteredData = value
      ? data.filter((item) =>
          Object.values(item).some(
            (val) =>
              val && val.toString().toLowerCase().includes(value.toLowerCase())
          )
        )
      : [...data]; // If the search value is empty, revert to the original data
  
    setPaginatedData([...filteredData]);
    setTotalPages(filteredData.length);
  };

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">To-Do List</h3>
        <div>
        <TextField
     value={searchValue}
     onChange={handleSearchInputChange}
     label="Searchi"
     variant="outlined"
     fullWidth
      // You can add more props for validation, styling, etc.
    />
      </div>
      </div>
     

      <div
        className="table-wrapper"
      >
        <AntTable
          loading={loading}
          columns={columns}
          dataSource={paginatedData} // Render paginated data
          pagination={{
            pageSize: 10,
            total: totalPages, // Total length of fetched data
            onChange: handlePageChange,
          }}
        ></AntTable>
      </div>
    </div>
  );
};

export default CustomTable;
