import React, { useEffect, useState } from "react";
import api from "../../api/axiousConfig";

const GetClients = ({ handleLiClick }: { handleLiClick: Function }) => {
  const [clientsVatNumbers, setClientsVatNumbers] = useState<string[]>([]);

  useEffect(() => {
    const fetchClientsData = async () => {
      try {
        const response = await api.get("getVatnumbers");
        if (response.status === 200) {
          const vatNumbers = response.data as string[];
          if (Array.isArray(vatNumbers)) {
            setClientsVatNumbers(vatNumbers);
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
  }, [handleLiClick]);

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

export default GetClients;
