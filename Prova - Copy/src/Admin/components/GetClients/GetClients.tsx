import React, { useEffect, useState } from "react";
import api from "../../api/axiousConfig";
import "./GetClients.css";

const GetClients = ({ handleLiClick, getClientsInput }: { handleLiClick: Function, getClientsInput: string }) => {
  const [clientsVatNumbers, setClientsVatNumbers] = useState<string[]>([]);

  useEffect(() => {
    const fetchClientsData = async () => {
      try {
        const response = await api.get("getVatnumbers");
        if (response.status === 200) {
          const vatNumbers = response.data as string[];
          if (Array.isArray(vatNumbers)) {
            if(getClientsInput == "" || getClientsInput == null){
              setClientsVatNumbers(vatNumbers);
            }
            else {
              const filteredVatNumbers = vatNumbers.filter(vatNumber =>
                vatNumber.includes(getClientsInput)
              );
              setClientsVatNumbers(filteredVatNumbers);
            }
          
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
  }, [handleLiClick, getClientsInput]);

  return (
    <div className="klienta">
      <ul>
        {clientsVatNumbers.map((vatNumber, index) => (
          <li key={index} onClick={() => handleLiClick(vatNumber)}>
            {vatNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetClients;
