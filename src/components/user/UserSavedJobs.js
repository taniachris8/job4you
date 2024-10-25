import React, { useState, useEffect } from "react";
import "./UserSavedJobs.css";
import Footer from "../Footer";
import { useAuth } from "../../services/AuthContext";
import JobItem from "../JobComponents/JobItem";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import { ApiService } from "../../services/ApiService";
import { API_URL } from "../../consts/general";

function UserSavedJobs() {
  const ApiJobService = new ApiService(API_URL);
  const { user } = useAuth();
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      ApiJobService.getAllJobs()
        .then((response) => {
          const allJobs = response.data;
          const userSavedJobs = allJobs.filter((job) =>
            user.savedJobs.includes(job._id)
          );
          setSavedJobs(userSavedJobs);
        })
        .catch((error) => {
          console.error("Error fetching jobs:", error);
        });
    }
  }, [user]);

  const handleRedirectToJobs = () => {
    navigate("/jobs");
  };

  return (
    <>
      <div className="user-saved-jobs-container">
        <div className="user-saved-jobs-wrapper">
          <h1 className="saved-jobs-title">Saved jobs</h1>
          <div className="saved-jobs-grid">
            {savedJobs.length > 0 ? (
              savedJobs.map((job) => (
                <div className="saved-jobs-item-wrapper" key={job.id}>
                  <JobItem
                    jobTitle={job.jobTitle}
                    area={job.area}
                    domain={job.domain}
                    profession={job.profession}
                    scope={job.scope}
                    id={job.id}
                  />
                </div>
              ))
            ) : (
              <div className="no-saved-jobs-message">
                <p>There are no saved jobs.</p>
                <Button variant="jobs" onClick={handleRedirectToJobs}>
                  Discover job offers
                  <i class="fa-solid fa-arrow-left discover-jobs-arrow"></i>
                </Button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UserSavedJobs;
