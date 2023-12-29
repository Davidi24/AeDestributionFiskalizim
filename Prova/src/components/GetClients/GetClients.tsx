import React, { useEffect, useState } from "react";
import api from "../../api/axiousConfig";

let ClientId = "";
const GetClients = () => {
  const [clientsVatNumbers, setClientsVatNumbers] = useState<string[]>([]);

  useEffect(() => {
    const fetchClientsData = async () => {
      try {
        const response = await api.get("getVatnumbers");
        if (response.status === 200) {
          const vatNumbers = response.data;
          if (Array.isArray(vatNumbers)) {
            setClientsVatNumbers(vatNumbers);
          } else if (typeof vatNumbers === "string") {
            setClientsVatNumbers([vatNumbers]);
          } else {
            console.error("VAT numbers format not recognized");
          }
        } else {
          console.error("Failed to fetch clients");
        }
      } catch (err) {
        console.error("Error fetching clients:", err);
      }
    };

    fetchClientsData();
  }, []);

  useEffect(() => {
    console.log("Length of clientsVatNumbers:", clientsVatNumbers.length);
  }, [clientsVatNumbers]);

  const handleLiClick = (index: number, value: string) => {
    console.log(`Clicked LI at index ${index} with value: ${value}`);
  };

  return (
    <div>
      <ul>
        {clientsVatNumbers.map((vatNumber, index) => (
          <li key={index} onClick={() => handleLiClick(index, vatNumber)}>
            {vatNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export function getId() {
  return ClientId;
}

function setID(id){
  ClientId = id;
}

export default GetClients;
