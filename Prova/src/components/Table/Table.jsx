import React, { useEffect, useState } from "react";
import { Table as AntTable } from "antd";
import "./Table.css";
import { columns } from "../../data/data";
import { getTableInfo } from "./TableFunctionalities/populateTable";

const CustomTable = ({ selectedVatNumber }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  // Fetch all data initially
  const fetchData = async (id) => {
    setLoading(true);
    try {
      const newData = await getTableInfo(id);
      setData([...newData]);
      setPaginatedData([...newData]); // Set paginated data initially with all fetched data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Selected VAT Number in Table:", selectedVatNumber);
    fetchData(selectedVatNumber);
  }, [selectedVatNumber]);

  // Handle pagination change
  const handlePageChange = (page) => {
    // Calculate the starting index and ending index of data for the selected page
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const slicedData = data.slice(startIndex, endIndex);
    setPaginatedData([...slicedData]); // Update paginated data based on the selected page
  };

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">To-Do List</h3>
      </div>
      <div
        className="table-wrapper"
        style={{
          maxHeight: "500px",
          overflowY: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <AntTable
          loading={loading}
          columns={columns}
          dataSource={paginatedData} // Render paginated data
          pagination={{
            pageSize: 10,
            total: data.length, // Total length of fetched data
            onChange: handlePageChange,
          }}
        ></AntTable>
      </div>
    </div>
  );
};

export default CustomTable;
