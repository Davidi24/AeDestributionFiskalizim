import React, { useEffect, useState } from "react";
import { Table as AntTable } from "antd";
import { columns } from "../../data/data";
import { getTableInfo } from "./TableFunctionalities/populateTable";
import TextField from "@mui/material/TextField";
import "./Table.css";
import { exportToExcel } from "./TableFunctionalities/exportData";

const CustomTable = ({ selectedVatNumber, startDate, endDate }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [originalData, setOriginalData] = useState([]);
  // const [dataToBeExport, setDataToBeExport] = useState([]);

  const [pages, setPages] = useState(0);
  const [pageSize, setPageSize] = useState(2500);
  const [selectedVatNumber1, setSelectedVatNumber1] = useState(null);
  const [hasInfo, setHasInfo] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const isSearchActive = searchValue !== "";
    console.log(isSearchActive);
    setIsSearchActive(isSearchActive);
  }, [searchValue]);

  useEffect(() => {
    setSelectedVatNumber1(selectedVatNumber);
  }, [selectedVatNumber]);

  useEffect(() => {
    handleSearchInputChange({ target: { value: searchValue } });
  }, [data]);
  
  //the moment the page change or the vatNumber then we start fetching the data
  useEffect(() => {
    fetchData(selectedVatNumber1, pages);
  }, [selectedVatNumber1, pages]);

  /*when we start to fetch data we first check if id(vatNumber) is equal to null. If so 
    we do not fetch data at all. If is not null we check if is an array. If it is it will
    go to the second condition. This mean that function is fetching data from the server
    and puting in the array but it has not retrive all yet. If is not they are 3 things that
    can be. if it returns a string == 1 then we know that function has finish retriving 
    data from the server so we just send the page to 0 and make vatnumber == null so when
    it will come again will no longer fetch. If it returns a string == 2 then it means
    it has check in server but it has not find anything for this reason make all emty.
    Otherwise the only option that is is that it have found the info in cache and will 
    appear from there   */
  const fetchData = async (id) => {
    try {
      if (id != null) {
        const newData = await getTableInfo(id, pages, pageSize);

        if (!Array.isArray(newData)) {
          if (newData == "1") {
            setPages(0);
            setSelectedVatNumber1(null);
          } else if (newData == "2") {
            setPages(0);
            setSelectedVatNumber1(null);
            setOriginalData([]);
            setData([]);
            setPaginatedData([]);
            setTotalPages(1);
          } else {
            setOriginalData(newData.data);
            setData(newData.data);
            setPaginatedData(newData.data);
            setTotalPages(newData.data.length);
          }
        } else if (Array.isArray(newData) && newData.length !== 0) {
          if (hasInfo) {
            setHasInfo(false);
            setOriginalData([]);
            setData([]);
            setPaginatedData([]);
            setTotalPages(1);
          }
          setPages((prevPage) => prevPage + 1);
          // setOriginalData((prevData) => [...prevData, ...newData]);
          if (!isSearchActive) {
            setPaginatedData((prevData) => [...prevData, ...newData]);
            setTotalPages((prevTotalPages) => prevTotalPages + newData.length);
          }
          setData((prevData) => [...prevData, ...newData]);
        }
      } else {
        setHasInfo(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    const filteredData = value
      ? data.filter((item) =>
          Object.values(item).some(
            (val) =>
              val && val.toString().toLowerCase().includes(value.toLowerCase())
          )
        )
      : [...data];
    setPaginatedData([...filteredData]);
    setOriginalData([...filteredData]);
    setTotalPages(filteredData.length);
  };

  useEffect(() => {
    const filterDataByDate = () => {
      if (!startDate && !endDate) {
        setPaginatedData([...originalData]);
        setTotalPages(originalData.length);
        return;
      }

      const filteredData = paginatedData.filter((item) => {
        const createdAt = new Date(item.createdAt); // Convert to timestamp
        const startTimestamp = new Date(startDate);
        const endTimestamp = new Date(endDate);

        if (!isNaN(createdAt)) {
          return createdAt >= startTimestamp && createdAt <= endTimestamp;
        }

        return true;
      });

      setPaginatedData([...filteredData]);
      setTotalPages(filteredData.length);
    };

    filterDataByDate();
  }, [startDate, endDate, originalData]);

  const handleExportdata = () => {
    exportToExcel(paginatedData);
  };

  // Handle pagination change
  const handlePageChange = (page) => {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const slicedData = data.slice(startIndex, endIndex);
      setPaginatedData([...slicedData]);
  };

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Faturat e Klienteve</h3>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <button className="exportDatat" onClick={handleExportdata}>
            Print Data
          </button>
        </div>

        <div>
          <TextField
            value={searchValue}
            onChange={handleSearchInputChange}
            label="Searchi"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              style: { color: "#d45316", borderColor: "#d45316" },
            }}
            style={{
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
            }}
          />
        </div>
      </div>

      <div className="table-wrapper">
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
