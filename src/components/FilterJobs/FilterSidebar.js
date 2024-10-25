import React, {useContext} from "react";
import "./FilterJobs-css/FilterSidebar.css";
import FilterCard from "./FilterCard";
import SmallTip from ".././Tips/SmallTip.js";
import { FilterContext } from "../../services/FilterContext.js";
import domainOptions from "../options/DomainOptions.js";
import professionOptions from "../options/ProfessionOptions.js";
import areaOptions from "../options/AreaOptions.js";
import scopeOptions from "../options/ScopeOptions.js";

function FilterSidebar() {
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter((filter) => filter !== value);
      } else {
        newFilters[category].push(value);
      }
      return newFilters;
    });
  };

  console.log("Selected Filters:", selectedFilters);


  return (
    <>
      <div className="sidebar-container">
        <div className="filters-wrapper">
          <div className="filter">
            <FilterCard
              header="תחום"
              filterLabels={domainOptions}
              selectedFilters={selectedFilters.domain}
              onFilterChange={(value) => handleFilterChange("domain", value)}
            />
          </div>
          <div className="filter">
            <FilterCard
              header="מקצוע"
              filterLabels={professionOptions}
              selectedFilters={selectedFilters.profession}
              onFilterChange={(value) => handleFilterChange("profession", value)}
            />
          </div>
          <div className="filter">
            <FilterCard
              header="אזור"
              filterLabels={areaOptions}
              selectedFilters={selectedFilters.area}
              onFilterChange={(value) => handleFilterChange("area", value)}
            />
          </div>
          <div className="filter">
            <FilterCard
              header="היקף משרה"
              filterLabels={scopeOptions}
              selectedFilters={selectedFilters.scope}
              onFilterChange={(value) => handleFilterChange("scope", value)}
            />
          </div>
        </div>
        <div className="recommended-articles-wrapper">
          <h2 className="recommended-art">מאמרים מומלצים</h2>
          <div className="tip-filter-wrapper">
            <SmallTip
              path="/"
              image="images/image3.jpg"
              title="טיפים לראיון עבודה"
              date="27.05.2024"
            />
          </div>

          <div className="tip-filter-wrapper">
            <SmallTip
              path="/"
              image="images/image7.jpg"
              title="טיפים לראיון עבודה"
              date="27.05.2024"
            />
          </div>
          <div className="tip-filter-wrapper">
            <SmallTip
              path="/"
              image="images/happy2.jpg"
              title="טיפים לראיון עבודה"
              date="27.05.2024"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSidebar;
