import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobItem.css";
import ApplyForm from "../ApplyForm.js";
import EditJobModalForm from "../Admin/EditJobModalForm.js";
import { useAuth } from "../../services/AuthContext.js";
import Button from "../Buttons/Button.js";

function JobItem({
  jobTitle,
  area,
  domain,
  profession,
  scope,
  id,
  jobDescription,
  jobNumber,
  jobRequirements,
  onDelete,
  onEdit,
}) {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedJob, setEditedJob] = useState({
    jobTitle,
    area,
    domain,
    profession,
    scope,
    jobNumber,
    jobDescription,
    jobRequirements
  });

  const { user } = useAuth(); 
  const navigate = useNavigate();

  const handleCloseModal = () => setShowApplyForm(false);
  const handleShowModal = () => setShowApplyForm(true);

  const handleInfoClick = () => {
    // window.location.href = `/jobs/${id}`;
    navigate(`/jobs/${id}`);
  };
  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedJob({
      ...editedJob,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedJob);
    setShowEditForm(false);
  };
  

  return (
    <>
    {user && user.role === 'admin' && (
      <div className="admin-btns">
        <i
          class="fa-solid fa-pen-to-square edit-btn"
          onClick={handleEditClick}
        ></i>
        <i
          class="fa-solid fa-trash delete-btn"
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
        ></i>
      </div>
    )}
      <Link to={`/jobs/${id}`} className="job-item-link">
        <div className="jobs__item">
          <h1 className="jobs-item-title">{jobTitle}</h1>
          <div className="jobs__item__info">
            <div className="jobs__item__location">
              <i class="fa-solid fa-location-dot"></i>
              <p className="jobs-item-city">{area}</p>
            </div>
            <div className="job-item-details">
              <div className="job-item-detail">
                <i class="fa-solid fa-suitcase details-icon"></i>
                <p className="job-item-descr-prg">{domain}</p>
              </div>
              <div className="job-item-detail">
                <i class="fa-regular fa-address-card details-icon"></i>
                <p className="job-item-descr-prg">{profession}</p>
              </div>
              <div className="job-item-detail">
                <i class="fa-solid fa-clock details-icon"></i>
                <p className="job-item-descr-prg">{scope}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="jobs-item-buttons">
        <Button variant="primary" onClick={handleShowModal}>
          הגשת מועמדות
        </Button>
        <Button variant="secondary" onClick={handleInfoClick}>
          מידע נוסף
        </Button>
        <ApplyForm
          showApplyForm={showApplyForm}
          onHide={handleCloseModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
      {showEditForm && (
        <EditJobModalForm
          showEditForm={showEditForm}
          onHide={() => setShowEditForm(false)}
          editedJob={editedJob}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </>
  );
}

export default JobItem;
