import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./JobPage.css";
import Footer from "../../components/Footer.js";
import ApplyForm from "../../components/ApplyForm.js";
import { useAuth } from "../../services/AuthContext.js";
import Button from "../../components/Buttons/Button.js";
import { useNavigate } from "react-router-dom";
import { ApiService } from "../../services/ApiService.js";
import { API_URL } from "../../consts/general.js";

function JobPage() {
  const Api = new ApiService(API_URL);
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleCloseModal = () => setShowApplyForm(false);
  const handleShowModal = () => setShowApplyForm(true);

  useEffect(() => {
    Api.getJobById(id)
      .then((response) => {
        if (response.data) {
          setJob(response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (user && job) {
      const savedJobs = Array.isArray(user.savedJobs) ? user.savedJobs : [];
      setIsSaved(savedJobs.includes(id));
    }
  }, [user, job, id]);

  // Fetch user saved jobs only if a user is logged in
  useEffect(() => {
    if (user) {
      // axios
      //   .get(`http://localhost:8080/users/${user.id}`)
      Api.getUserById(user._id)
        .then((response) => {
          if (response.data.savedJobs.includes(id)) {
            setIsSaved(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, [user, id]);

  const handleSaveJob = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const currentSavedJobs = Array.isArray(user.savedJobs)
      ? user.savedJobs
      : [];

    const updatedSavedJobs = isSaved
      ? currentSavedJobs.filter((jobId) => jobId !== id)
      : [...currentSavedJobs, id];

    // Log updated saved jobs to debug
    console.log("Updated saved jobs:", updatedSavedJobs);

    // Update the user's saved jobs
    console.log("user", user);
    Api.updateUser(user._id, { ...user, savedJobs: updatedSavedJobs })
      .then((response) => {
        console.log("User updated:", response.data);
        setIsSaved(!isSaved);
        setUser({ ...user, savedJobs: updatedSavedJobs });
      })
      .catch((error) => {
        console.error("Error saving job:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>No job found</div>;
  }

  const renderTextAsListItems = (text) => {
    return text.split("\n").map((str, index) => <li key={index}>{str}</li>);
  };

  return (
    <>
      <div className="job-page-container">
        <h1 className="job-page-title">{job.jobTitle}</h1>
        <div className="job-page-content-wrapper">
          <div className="job-page-description-wrapper">
            <div className="job-page-description">
              <h1 className="description-title">תיאור</h1>
              <ul>{renderTextAsListItems(job.jobDescription)}</ul>
            </div>
            <div className="job-page-requirements">
              <h className="description-title">דרישות</h>
              <ul>{renderTextAsListItems(job.jobRequirements)}</ul>
            </div>
            <div className="job-page-btns">
              <Button variant="primary" onClick={handleShowModal}>
                הגשת מועמדות
              </Button>
              <button
                className={`wishlist-btn ${isSaved ? "saved" : ""}`}
                onClick={handleSaveJob}
              >
                <i
                  className={`fa-${isSaved ? "solid" : "regular"} fa-heart`}
                ></i>
                {isSaved ? " הוסר מהמועדפים" : " הוספה למועדפים"}
              </button>
              <ApplyForm
                showApplyForm={showApplyForm}
                onHide={handleCloseModal}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
          <div className="job-page-details">
            <div className="job-page-detail">
              <div className="detail-and-icon">
                <i class="fa-solid fa-suitcase details-icon"></i>
                <h1 className="detail-title">תחום:</h1>
              </div>
              <p>{job.domain}</p>
            </div>
            <div className="job-page-detail">
              <div className="detail-and-icon">
                <i class="fa-regular fa-address-card details-icon"></i>
                <h1 className="detail-title">מקצוע:</h1>
              </div>
              <p>{job.profession}</p>
            </div>
            <div className="job-page-detail">
              <div className="detail-and-icon">
                <i class="fa-solid fa-location-pin details-icon"></i>
                <h1 className="detail-title">איזור:</h1>
              </div>
              <p>{job.area}</p>
            </div>
            <div className="job-page-detail">
              <div className="detail-and-icon">
                <i class="fa-solid fa-clock details-icon"></i>
                <h1 className="detail-title">היקף משרה:</h1>
              </div>
              <p>{job.scope}</p>
            </div>
            <div className="job-page-detail">
              <div className="detail-and-icon">
                <i class="fa-solid fa-tag details-icon"></i>
                <h1 className="detail-title"> מס’ משרה:</h1>
              </div>
              <p>{job.jobNumber}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobPage;
