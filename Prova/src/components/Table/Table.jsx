import  { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";


const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        if (Array.isArray(res.data)) {
          console.log(res.data);
          console.log(BootstrapTable.VERSION); 
          setData(res.data);
        } else {
          console.error("Data received is not an array:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const columns = [
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "postId",
      text: "Product ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      editor: {
        type: "text", 
      },
    },
  ];

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Clients Info</h3>
      </div>
        {/* <BootstrapTable
          keyField="id"
          data={data} // Pass fetched data here
          columns={columns} // Pass columns definition here
          pagination={paginationFactory()} // Enable pagination if needed
        /> */}
  
    </div>
  );
};

export default Table;
