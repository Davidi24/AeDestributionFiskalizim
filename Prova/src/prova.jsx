import React, { useState } from "react";
import DataPicker from "./DataPicker/DataPicker";

function prova() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const authorization_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrZWNpZGF2aWQyMkBnbWFpbC5jb20iLCJleHAiOjE3MDk3NjMzOTB9.otFDEuX6oj7qFhFeH4bfFafGaZrja8wrSfaR9Xe0rgM";




    const filterData = (data, startDate, endDate) => {
      
    const [startDay, startMonth, startYear] = startDate.split("/");
    const [endDay, endMonth, endYear] = endDate.split("/");

    const mergedDate = `${startDay}/${startMonth}/${startYear}`;
    const mergedMonth = `${endDay}/${endMonth}/${endYear}`;
      const filteredData = [];
  
      let startYearInt = parseInt(startYear);
      let endYearInt = parseInt(endYear);
      let startMonthInt = parseInt(startMonth);
      let endMonthInt = parseInt(endMonth);
  
      for (let i = startYearInt; i <= endYearInt; i++) {
          if (!(data.response[`${i}`] === undefined)) {
              for (let j = startMonthInt; j <= 12; j++) {
                  if (!(data.response[`${i}`][`${j}`] === undefined)) {
                      console.log(Object.entries(data.response[`${i}`][`${j}`]));
                      filteredData.push(...Object.entries(data.response[`${i}`][`${j}`]));
                  }
              }
          }
      }
      return filteredData;

  };
  

  const postData = async () => {
    try {
      const response = await fetch(
        "http://44.205.109.138:7690/emp_info/hours_by_day_period/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization_token}`,
          },
          body: JSON.stringify({
            user_id: "A104",
            date_from: "01/01/2000",
            date_to: "01/01/2025",
          }),
        }
      );
      const responseData = await response.json();
       console.log(responseData.response)
      setData(responseData.response);
      const startDateMock = "28/02/2024";
      const endDateMock = "03/03/2025";
      const filtered = filterData(responseData, startDateMock, endDateMock);
      setFilteredData(filtered);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={postData}>Send POST Request</button>
      {data && <p>{JSON.stringify(data)}</p>}
      {filteredData && <p>{JSON.stringify(filteredData)}</p>}
      <div> </div>
      <br />
      <br /><br />
      <DataPicker />
    </div>
  );
}

export default prova;
