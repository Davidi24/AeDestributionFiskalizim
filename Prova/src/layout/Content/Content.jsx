import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";
import React, { useEffect } from "react";

const Content = ({ selectedVatNumber, handleFilter, handleClear }) => {
  const prova = () => {
    console.log(handleFilter + "lool");
  };

  useEffect(() => {
    prova(); // Call prova function when the component renders
  }, [handleFilter]);

  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain
        selectedVatNumber={selectedVatNumber}
        handleFilter={handleFilter} // Corrected prop name
        handleClear={handleClear}
      />
    </div>
  );
};

export default Content;
