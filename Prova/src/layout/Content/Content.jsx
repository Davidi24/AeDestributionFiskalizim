import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";
import React, { useEffect } from "react";

const Content = ({
  selectedVatNumber,
  handleFilter,
  handleClear,
  startDate,
  endDate,
  pageSelected,
}) => {
  let contentToDisplay;

  if (pageSelected === 2) {
    contentToDisplay = (
      <ContentMain
        selectedVatNumber={selectedVatNumber}
        handleFilter={handleFilter} // Corrected prop name
        handleClear={handleClear}
        startDate={startDate}
        endDate={endDate}
        pageSelected={pageSelected}
      />
    );
  }

  return (
    <div className="main-content">
      <ContentTop />
      {contentToDisplay}
    </div>
  );
};

export default Content;
