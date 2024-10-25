import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Jobs.css";
import FilterSidebar from "../../components/FilterJobs/FilterSidebar.js";
import JobItem from "../../components/JobComponents/JobItem.js";
import Footer from "../../components/Footer.js";
import AddNewJob from "../../components//Admin/AddNewJob.js";
import { useAuth } from "../../services/AuthContext.js";
import CustomPagination from "../../components/CustomPagination.js";
import { FilterContext } from "../../services/FilterContext.js";
import { useLocation } from "react-router-dom";
import FilterFreeSearch from "../../components/FilterJobs/FilterFreeSearch.js";
import { ApiService } from "../../services/ApiService.js";
import { API_URL } from "../../consts/general.js";

function Jobs() {
  const ApiJobService = new ApiService(API_URL);
  const [showAddNewJob, setShowAddNewJob] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    searchTerm,
    setSearchTerm,
    selectedFilters,
    setSelectedFilters,
    applyFilters,
    filteredJobs,
    setFilteredJobs,
  } = useContext(FilterContext);
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const location = useLocation();
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const [currentJobs, setCurrentJobs] = useState([]);
  const handleCloseAddJobModal = () => setShowAddNewJob(false);
  const handleShowAddJobModal = () => setShowAddNewJob(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    // Clear the selected filters when Jobs page is rendered
    setSelectedFilters({ area: [], domain: [], profession: [], scope: [] });
  }, [setSelectedFilters]);

  useEffect(() => {
    setCurrentJobs(filteredJobs.slice(indexOfFirstJob, indexOfLastJob));
  }, [filteredJobs, currentPage]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter");
    if (filter) {
      try {
        const parsedFilter = JSON.parse(decodeURIComponent(filter));
        setSelectedFilters((prevFilters) => ({
          ...prevFilters,
          area: parsedFilter,
        }));
      } catch (error) {
        console.error("Failed to parse filter from URL:", error);
      }
    }

    // New: Check if the state contains applyFilters
    if (location.state && location.state.applyFilters) {
      applyFilters();
    }
  }, [location.search, location.state, setSelectedFilters]);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedFilters]);

  const fetchJobs = async () => {
    try {
      const response = await ApiJobService.getAllJobs();
      const reversedJobs = response.data.reverse();
      setJobs(response.data);
      setFilteredJobs(reversedJobs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  const handleDeleteJob = (id) => {
    // .delete(`http://localhost:8080/jobs/${id}`)
    ApiJobService.deleteJob(id)
      .then((response) => {
        console.log("Job deleted:", response);
        fetchJobs();
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  };

  const handleEditJob = (id, updatedJob) => {
    // axios
    //   .put(`http://localhost:8080/jobs/${id}`, updatedJob)
    ApiJobService.updateJob(id, updatedJob)
      .then((response) => {
        console.log("Job updated:", response);
        fetchJobs();
      })
      .catch((error) => {
        console.error("Error updating job:", error);
      });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (jobs.length === 0) {
    return <div>No jobs available</div>;
  }

  return (
    <div className="jobs-container">
      <div className="jobs-wrapper">
        <FilterFreeSearch className="jobs-input" />
        <div className="jobs-and-filter-block">
          <div className="job-filter">
            <FilterSidebar />
          </div>
          <div className="job-items-wrapper">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <div className="job-item" key={job.id}>
                  <JobItem
                    jobTitle={job.jobTitle}
                    area={job.area}
                    domain={job.domain}
                    profession={job.profession}
                    scope={job.scope}
                    id={job._id}
                    jobNumber={job.jobNumber}
                    jobDescription={job.jobDescription}
                    jobRequirements={job.jobRequirements}
                    onDelete={() => handleDeleteJob(job.id)}
                    onEdit={(updatedJob) => handleEditJob(job.id, updatedJob)}
                  />
                </div>
              ))
            ) : (
              <div>No jobs found</div>
            )}
            <CustomPagination
              totalItems={filteredJobs.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
          {user && user.role === "admin" && (
            <button className="add-new-job-btn" onClick={handleShowAddJobModal}>
              <i className="fa-solid fa-plus add-new-job-icon"></i>
              <p>הוסף עבודה חדשה</p>
            </button>
          )}
          <AddNewJob
            showAddNewJob={showAddNewJob}
            onHide={handleCloseAddJobModal}
            handleCloseAddJobModal={handleCloseAddJobModal}
            setShowAddNewJob={setShowAddNewJob}
            handleShowAddJobModal={handleShowAddJobModal}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
