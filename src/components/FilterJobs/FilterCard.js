import React, { useState } from "react";
import "./FilterJobs-css/FilterCard.css";
import Accordion from "react-bootstrap/Accordion";
import SearchBar from "../SearchBar";
import FilterChecks from "./FilterChecks";

function FilterCard({
  header,
  filteredLabels,
  filterLabels,
  selectedFilters,
  onFilterChange,
}) {
  const [filterSearch, setFilterSearch] = useState("");

  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0" className="accordion-filter">
          <Accordion.Header bsPrefix="acc-header">{header}</Accordion.Header>
          <Accordion.Body>
            <SearchBar
              placeholder="חיפוש היקף משרה..."
              setFilterSearch={setFilterSearch}
            />
            <FilterChecks
              filterSearch={filterSearch}
              filteredLabels={filteredLabels}
              filterLabels={filterLabels}
              selectedFilters={selectedFilters}
              onFilterChange={onFilterChange}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FilterCard;
