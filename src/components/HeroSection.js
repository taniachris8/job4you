import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import "./components-css/HeroSection.css";
import FilterFreeSearch from "./FilterJobs/FilterFreeSearch.js";
import CustomTooltip from "./CustomTooltip.js";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../services/FilterContext.js";

function HeroSection() {
  const { setSearchTerm } = useContext(FilterContext);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Clear the search term when the HeroSection is rendered
    setSearchTerm("");
  }, [setSearchTerm]);

  const handleRedirectToAllJobs = () => {
    navigate(`/jobs`);
  };

  return (
    <>
      <div className="hero-container">
        <h1 className="hero-cnt-title">JOB4YOU השמה ויעוץ כח אדם</h1>
        <p className="hero-cnt-prg">הדרך המהירה והמקצועית למעסיק הנכון</p>
        <div className="hero-input-container">
          <FilterFreeSearch className="filter-free-search-style" />
          <CustomTooltip message="Advanced search" placement="bottom">
            <button
              className="slider-icon-btn"
              onClick={handleRedirectToAllJobs}
            >
              <i className="fa-solid fa-sliders slider-icon"></i>
            </button>
          </CustomTooltip>
        </div>
        <div>Counter: {counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Count
        </button>
      </div>
    </>
  );
}

export default HeroSection;
