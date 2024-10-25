import React, { useState, useEffect } from "react";
import "./LatestJobs.css";
import JobItem from "./JobItem.js";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button.js";
import { ApiService } from "../../services/ApiService.js";
import { API_URL } from "../../consts/general.js";

function LatestJobs() {
  const ApiAllJobs = new ApiService(API_URL);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/jobs");
  };

  useEffect(() => {
    ApiAllJobs.getAllJobs()
      .then((response) => {
        console.log("API Response:", response);
        if (response.data) {
          const latestJobs = response.data.slice(-6).reverse(); // Get the last 6 jobs
          setJobs(latestJobs);
        }
        setLoading(false); // Set loading to false after fetch
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }
  if (jobs.length === 0) {
    return <div>No jobs available</div>; // Display message if no jobs
  }

  return (
    <div className="latest-job-container">
      <h1 className="latest-job-title">רשימת משרות אחרונה</h1>
      <p className="latest-job-prg">
        דע את הערך שלך ומצא את העבודה שמזכה את חייך
      </p>
      <div className="job-items-container">
        {jobs.map((job) => (
          <div className="item-wrapper" key={job.id}>
            <JobItem
              jobTitle={job.jobTitle}
              area={job.area}
              domain={job.domain}
              profession={job.profession}
              scope={job.scope}
              id={job.id}
            />
          </div>
        ))}
      </div>
      <Button variant="jobs" onClick={handleClick}>
        לכל המשרות
        {/* <i class="fa-solid fa-circle-chevron-left"></i> */}
        <i class="fa-solid fa-arrow-left arrow-style"></i>
      </Button>
    </div>
  );
}

export default LatestJobs;
