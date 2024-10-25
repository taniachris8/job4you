import React, { createContext, useState, useEffect } from "react";
import { ApiService } from "./ApiService";
import { API_URL } from "../consts/general";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const ApiAllJobs = new ApiService(API_URL);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    area: [],
    domain: [],
    profession: [],
    scope: [],
  });
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs when the component mounts
    const fetchJobs = async () => {
      try {
        const response = await ApiAllJobs.getAllJobs();
        const reversedJobs = response.data.reverse(); // Reverse the jobs array
        setJobs(reversedJobs);
        setFilteredJobs(reversedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const applyFilters = () => {
    console.log("apply filters");
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFilters.domain && selectedFilters.domain.length > 0) {
      filtered = filtered.filter((job) =>
        selectedFilters.domain.includes(job.domain)
      );
    }

    if (selectedFilters.profession && selectedFilters.profession.length > 0) {
      filtered = filtered.filter((job) =>
        selectedFilters.profession.includes(job.profession)
      );
    }

    if (selectedFilters.area && selectedFilters.area.length > 0) {
      filtered = filtered.filter((job) =>
        selectedFilters.area.includes(job.area)
      );
    }

    if (selectedFilters.scope && selectedFilters.scope.length > 0) {
      filtered = filtered.filter((job) =>
        selectedFilters.scope.includes(job.scope)
      );
    }

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedFilters, jobs]);

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedFilters,
        setSelectedFilters,
        filteredJobs,
        applyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
